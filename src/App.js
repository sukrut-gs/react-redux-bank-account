import React, { Component } from 'react';
import './App.css';
import { createAction } from './actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    data: state
  };
}

class App extends Component {

  handleButtonClick = (e) => {
    const amount = e.target.name;
    this.props.dispatch(createAction(amount));
  }

  render() {

    return (
      <div>
        <div>
          Transaction Status: {this.props.data.message}
        </div>
        <div>
          Available Balance : Rs. {this.props.data.balance}
        </div>
        <button onClick={this.handleButtonClick} name="300">Withdraw Rs.300</button>
        <button onClick={this.handleButtonClick} name="500">Withdraw Rs.500</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);