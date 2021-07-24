import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './context/contextAPI';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },      
    };  
    
    this.moveCar = this.moveCar.bind(this)
  }  

  moveCar(car, side) {
    this.setState({
      cars: {
        [car]: side
      },
    })
  }


  render(){
    return(
    <MyContext.Provider value={{state: this.state.cars, moveCar: this.moveCar}}>   
      <Cars />   
    </MyContext.Provider>  
    )
  }
}

export default App;
