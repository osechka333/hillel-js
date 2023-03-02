import React, { Component } from 'react';

export default class ClockClass extends Component {
  intervalId;

  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000)
  }

  componentDidUpdate() {
    console.log('ClockClass called componentDidUpdate')
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  tick () {
    this.setState({ date: new Date() });

    console.log('from Clock setInterval')
  }

  render () {
    return (
      <div>
        <h1>Clock on class component!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}