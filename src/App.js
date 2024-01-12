import React from 'react';
import './App.css';
import axios from 'axios';
import NavLink from './components/NavLink';
import BikeForm from './components/BikeForm';
import CurrentBike from './components/CurrentBike';
import { connect } from 'react-redux';
function App(props) {
  // working axios call:
  if (props.isFetching) {
    return <h1>getting bikes</h1>
  }
  return (
    <div className="App">
      Async Redux Project
      <BikeForm />
      <NavLink />
      <CurrentBike  />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching
  }
}
export default connect(mapStateToProps, {}) (App);