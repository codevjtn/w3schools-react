import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garagecar extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export default Garagecar;
