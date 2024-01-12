import { ON_CHANGE, SET_IS_FETCHING, SET_BIKES_ARRAY, ON_CLICK, RESET_VALUES} from "../actions/actions"
const initialState = {
    currentBike: {
        make: "",
        model: "",
        year: "",
        type: "",
        displacement: "",
        engine: "",
        power: "",
        torque: "",
        compression: "",
        bore_stroke: "",
        valves_per_cylinder: "",
        fuel_system: "",
        fuel_control: "",
        ignition: "",
        lubrication: "",
        cooling: "",
        gearbox: "",
        transmission: "",
        clutch: "",
        frame: "",
        front_suspension: "",
        front_wheel_travel: "",
        rear_suspension: "",
        rear_wheel_travel: "",
        front_tire: "",
        rear_tire: "",
        front_brakes: "",
        rear_brakes: "",
        total_weight: "",
        seat_height: "",
        total_height: "",
        total_length: "",
        total_width: "",
        ground_clearance: "",
        wheelbase: "",
        fuel_capacity: "",
        starter: ""
    },
    make: '',
    model: '',
    bikesArray: [],
    isFetching: false
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_CHANGE:
            return { ...state, [action.payload.name]: action.payload.value }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        case SET_BIKES_ARRAY:
            return { ...state, bikesArray: action.payload }
        case ON_CLICK:
            return { ...state, currentBike: { ...state.bikesArray[action.payload] } }
        case RESET_VALUES:
            return {...state, make: '', model: ''}
        default:
            return state
    }
}