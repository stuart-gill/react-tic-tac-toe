import React from 'react';
import ReactDOM from 'react-dom';
import "../index.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  //lifecycle methods
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  //toLocaleTimeString is a predefined function
  render() {
    return (
      <div>
        <h1> Hey everybody!! It's {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;