import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { errorAction, defaultAction } from '../actions/defaultActions';

export class Home extends Component {
  static propTypes = {
    data: object.isRequired,
    defaultAction: func.isRequired
  };

  state = {
    text: ''
  };

  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.text !== '') {
      this.props.defaultAction(this.state.text);
      this.setState({ text: '' });
    } else {
      this.props.errorAction();
      this.nameInput.focus();
    }
  };

  render() {
    const { text } = this.props.data;

    const Texts = () => {
      return text.map((t, i) => {
        return <h2 key={i}>{t}</h2>;
      });
    };

    return (
      <form className="home" onSubmit={this.onSubmit}>
        <div className="form-group">
          <h1>Home</h1>
          <br />
          <h2>Add Text to List</h2>
        </div>
        <div className="form-group">
          <input
            placeholder={this.props.error ? this.props.error : ''}
            ref={input => {
              this.nameInput = input;
            }}
            onChange={this.onChange}
            className="form-control"
            type="text"
            value={this.state.text}
          />
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </div>
        <div className="form-group">
          <Texts />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  data: state.data
});

const mapDispatchToProps = { errorAction, defaultAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
