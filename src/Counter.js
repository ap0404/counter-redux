import React from "react";
import { connect } from 'react-redux';
import "./counter.css";


class Counter extends React.Component {

   increment = () => {
     this.props.dispatch({ type : 'INCREMENT' });
   }

   decrement = () => {
     this.props.dispatch({ type : 'DECREMENT' });
   }

   render() {
   return (
        <div className="counter-app">
          <div className="counter-value">{this.props.count}</div>
          <button className="counter-decrement btn" onClick={this.decrement}> - </button>
          <button className="counter-increment btn" onClick={this.increment}> + </button>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}


export default connect(mapStateToProps)(Counter);
