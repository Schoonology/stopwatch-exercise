import React, { Component } from 'react';
import timer from './lib/timer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      time: '',
      laps: [],
    };
    this._intervalId = null;

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.split = this.split.bind(this);
    this.reset = this.reset.bind(this);
  }

  start() {
    timer.start();

    this.setState({
      running: true,
    });

    this._intervalId = setInterval(() => {
      this.tick();
    }, 10);
  }

  tick() {
    this.setState({
      time: this.format(timer.time()),
    });
  }

  stop() {
    timer.stop();
    this.setState({
      running: false,
    });

    clearInterval(this._intervalId);
  }

  split() {
    this.setState({
      laps: this.state.laps.concat(this.format(timer.time())),
    });
  }

  reset() {
    this.setState({
      time: '',
      laps: [],
    });
  }

  format(ms) {
    return String(Math.floor(ms / 10) / 100).replace('.', ':');
  }

  render() {
    return (
      <div className="App">
        <h1>Stopwatch Exercise</h1>
        <div className="time">{this.state.time}</div>
        <div className="buttons">
          <button disabled={this.state.running} onClick={this.start}>Start</button>
          <button disabled={!this.state.running} onClick={this.stop}>Stop</button>
          <button disabled={!this.state.running} onClick={this.split}>Split</button>
          <button disabled={this.state.running} onClick={this.reset}>Reset</button>
        </div>
        <h2>Laps</h2>
        <ol>
          {this.state.laps.map(lap => {
            return (
              <li>{lap}</li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
