import ReactDOM from "react-dom";
import React from "react";
import message from "./message.js";
import Carpropsjs from "./carprops.js";
const myArray = ["apple", "banana", "orange"];
import Garagecar from "./garage.js";
import Carstates from "./state-car.js";
import Carchangestate from "./state-change-color.js";

const myList = myArray.map((item) => <p>{item}</p>);
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers.map((item) => <p>{item}</p>);
function Car(props) {
  return (
    <li>
      I am a {props.brand} colur is {props.colour}
    </li>
  );
}
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red"
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow"
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };

function Cars(props) {
  return <li>I am a {props.brand}</li>;
}

function Garages() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Cars brand={car} />
        ))}
      </ul>
    </>
  );
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford", color: "Black" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" }
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} colour={car.color} />
        ))}
      </ul>
    </>
  );
}

class Carsprop extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}
const myelement = React.createElement("h1", {}, "I do not use JSX!");
ReactDOM.render(
  <React.Fragment>
    <Garage />
    <Garages />
    {message()}
    {myelement}
    <Carsprop color="red" />
    <Carpropsjs model="Ford" />
    <Garagecar />
    <Carstates />
    <Carchangestate />
    {myList}
    {one}
    {two}
    {rest}
  </React.Fragment>,
  document.getElementById("root")
);
//ReactDOM.render(<Garages />, document.getElementById("root"));
//  {myUpdatedVehicle.map(myUpdatedVehicle => <div>{myUpdatedVehicle.name}</div>)}
