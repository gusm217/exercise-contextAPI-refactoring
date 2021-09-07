import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './context/MyContext';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.moveCar = this.moveCar.bind(this)
  }

  moveCar(car, side) {
    this.setState({
      [car]: side
    })
  }

  render() {
    return (
      <MyContext.Provider value={{state: this.state, move: this.moveCar }}>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </MyContext.Provider>
    );
  }
}

export default App;
