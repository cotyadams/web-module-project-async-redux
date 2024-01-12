import React from "react";
import { connect } from 'react-redux'
import { onChange, onSubmit } from "../actions/actions";
const BikeForm = (props) => {
    return (
        <form
            id="inputForm"
            onSubmit={(e) => {
                e.preventDefault();
                props.onSubmit(props.make, props.model);
            }}
            >
            <label htmlFor='make-input'>Make:</label>
            <input
                type="text"
                id="make-input"
                value={props.make}
                name="make"
                onChange={props.onChange}/>
            
            <label htmlFor='model-input'>Model:</label>
            <input
                type="text"
                id="model-input"
                value={props.model}
                name="model"
                onChange={props.onChange}/>
            <button type="submit">Search</button>
        </form>
    )
}
const mapStateToProps = (state) => {
    return ({
        make: state.make,
        model: state.model
    })
}
export default connect(mapStateToProps, {onChange, onSubmit})(BikeForm)