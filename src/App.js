import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <section>
        <div className="set">
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        <div><img src={ require("./pix/leave5.png") } alt="l"/></div>
        </div>
      </section>
    );
  }
}

export default App;
