import React, { Component } from "react";
import "./styles.css";

let customeStyle = {
  color: ""
};

const currentDate = new Date().getHours();
let greeting;

if (currentDate < 12) {
  greeting = "Good Morning";
  customeStyle.color = "Green";
  console.log(customeStyle.color);
  console.log(currentDate);
} else if (currentDate < 18) {
  greeting = "Good Afternoon";
  customeStyle.color = "Red";
  console.log(customeStyle.color);
  console.log(currentDate);
} else {
  greeting = "Good Night";
  customeStyle.color = "Blue";
  console.log(customeStyle.color);
  console.log(currentDate);
}

class Greeting extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1 style={customeStyle}> {greeting} </h1>
      </div>
    );
  }
}

export default Greeting;
