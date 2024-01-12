import { connect } from "react-redux";
import React from "react";
import { onClick } from "../actions/actions";
const NavElement = ({bike, key, onClick, index}) => {
    return (
        <button onClick={() => onClick(index)}>{bike.model}</button>
    )
}
const mapStateToProps = (state) => {
    return {
        bikesArray: state.bikesArray
    }
}
export default connect(mapStateToProps, {onClick})(NavElement)