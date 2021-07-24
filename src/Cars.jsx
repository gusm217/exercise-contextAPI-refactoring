/* eslint-disable no-unused-expressions */
// src/Cars.jsx

// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import MyContext from './context/contextAPI';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';

function Cars() {  
  return (
    <MyContext.Consumer>
      {({state, moveCar}) => {
        return(
          <div>
            <div>
              <img
                className={state.red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => moveCar('red', !state.red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={state.blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => moveCar('blue', !state.blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={state.yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => moveCar('yellow', !state.yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
      )}}
      </MyContext.Consumer>    
  );
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.cars.red,
//   blueCar: state.cars.blue,
//   yellowCar: state.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;
