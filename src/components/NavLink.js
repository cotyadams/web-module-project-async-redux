import { connect } from "react-redux"
import React from "react"
import NavElement from "./NavElement"
import { onClick } from "../actions/actions"
const NavLink = (props) => {
    if (props.bikesArray) {
        return (
            <nav>
                {props.bikesArray.map((bike, index) => {
                    return (
                        <NavElement
                            key={index}
                            bike={bike}
                            index={index}
                        />
                    )
                })}
            </nav>
        )
    } else {
        return <></>
    }
}

const mapStateToProps = (state) => {
    return {
        currentBike: state.currentBike,
        bikesArray: state.bikesArray
    }
}
export default connect(mapStateToProps, {onClick})(NavLink)

