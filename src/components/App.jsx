import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./../styles/normalize.css";
import "./../styles/skeleton.css";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

export default App;
