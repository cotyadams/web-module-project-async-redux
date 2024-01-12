import React from "react";
import { connect } from "react-redux";
const CurrentBike = (props) => {
    const {currentBike} = props
    if (currentBike) {
        return (
        <>
                <h3>make: {currentBike.make}</h3>
                <h3>model: {currentBike.model}</h3>
                <h3>year: {currentBike.year}</h3>
                <h3>type: {currentBike.type}</h3>
                <h3>displacement: {currentBike.displacement}</h3>
                <h3>engine: {currentBike.engine}</h3>
                <h3>power: {currentBike.power}</h3>
                <h3>torque: {currentBike.torque}</h3>
                <h3>compression: {currentBike.compression}</h3>
                <h3>bore_stroke: {currentBike.bore_stroke}</h3>
                <h3>valves_per_cylinder: {currentBike.valves_per_cylinder}</h3>
                <h3>fuel_system: {currentBike.fuel_system}</h3>
                <h3>fuel_control: {currentBike.fuel_control}</h3>
                <h3>ignition: {currentBike.ignition}</h3>
                <h3>lubrication: {currentBike.lubrication}</h3>
                <h3>cooling: {currentBike.cooling}</h3>
                <h3>gearbox: {currentBike.gearbox}</h3>
                <h3>transmission: {currentBike.transmission}</h3>
                <h3>clutch: {currentBike.clutch}</h3>
                <h3>frame: {currentBike.frame}</h3>
                <h3>front_suspension: {currentBike.front_suspension}</h3>
                <h3>front_wheel_travel: {currentBike.front_wheel_travel}</h3>
                <h3>rear_suspension: {currentBike.rear_suspension}</h3>
                <h3>rear_wheel_travel: {currentBike.rear_wheel_travel}</h3>
                <h3>front_tire: {currentBike.front_tire}</h3>
                <h3>rear_tire: {currentBike.rear_tire}</h3>
                <h3>front_brakes: {currentBike.front_brakes}</h3>
                <h3>rear_brakes: {currentBike.rear_brakes}</h3>
                <h3>total_weight: {currentBike.total_weight}</h3>
                <h3>seat_height: {currentBike.seat_height}</h3>
                <h3>total_height: {currentBike.total_height}</h3>
                <h3>total_length: {currentBike.total_length}</h3>
                <h3>total_width: {currentBike.total_width}</h3>
                <h3>ground_clearance: {currentBike.ground_clearance}</h3>
                <h3>wheelbase: {currentBike.wheelbase}</h3>
                <h3>fuel_capacity: {currentBike.fuel_capacity}</h3>
                <h3>starter: {currentBike.starter}</h3>
        </>
    )
    } else {
        return <></>
    }
    
}
const mapStateToProps = (state) => {
    return {currentBike: state.currentBike}
}
export default connect(mapStateToProps)(CurrentBike)