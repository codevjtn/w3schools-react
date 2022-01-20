import React from "react";
import ReactDOM from "react-dom";
class Carpropsjs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}
export default Carpropsjs;
