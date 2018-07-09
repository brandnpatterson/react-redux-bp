import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
import { defaultAction } from '../actions/defaultActions';

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

  onClick = () => {
    this.props.defaultAction(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.props.data;

    const Texts = () => {
      return text.map((t, i) => {
        return <h2 key={i}>{t}</h2>;
      });
    };

    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Home</h1>
              <input
                type="text"
                onChange={this.onChange}
                value={this.state.text}
              />
              <button type="button" onClick={this.onClick}>
                Submit
              </button>
              <Texts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = { defaultAction };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
