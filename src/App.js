import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Saoussen",
      bio: "I am a mechatronic engineer.",
      imgSrc: "./images/my_photo.jpg",
      profession: "SEO Specialist",
    },
    show: false,
    time: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show && (
          <div>
            <img src={this.state.person.imgSrc} alt="My photo" />

            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {this.state.time} seconds</p>
      </div>
    );
  }
}

export default App;
