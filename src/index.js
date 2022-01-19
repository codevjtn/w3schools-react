import ReactDOM from "react-dom";
import React from "react";

function Car(props) {
  return (
    <li>
      I am a {props.brand} colur is {props.colour}
    </li>
  );
}
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

ReactDOM.render(
  <React.Fragment>
    <Garage />
    <Garages />
  </React.Fragment>,
  document.getElementById("root")
);
//ReactDOM.render(<Garages />, document.getElementById("root"));
