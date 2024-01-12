import axios from "axios";

export const ON_CHANGE = 'ON_CHANGE';
export const ON_SUBMIT = 'ON_SUBMIT';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const SET_BIKES_ARRAY = 'SET_BIKES_ARRAY';
export const ON_CLICK = 'ON_CLICK';
export const RESET_VALUES = 'RESET_VALUES';

export const onChange = (e) => {
    return {type: ON_CHANGE, payload: {value: e.target.value, name: e.target.name}}
}
export const onSubmit = (make, model) => dispatch => {
    dispatch(setIsFetching(true))
    axios({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/motorcycles`,
        params: {
            make: make,
            model: model
        },
        headers: {
            'X-Api-Key': 'DBrue0i6kOF8TcMMxFop/w==7wIhHFjFHFxhD4e8',
            'content-Type': 'application/json'
        }
    }).then((res) => {
    dispatch(setBikesArray(res.data))
    }).catch((err) => {
        console.error(err)
    }).finally(() => {
        dispatch(setIsFetching(false))
        dispatch(resetValues())
    })
    return {type: ON_SUBMIT, payload: {make: make, model: model}}
}
export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, payload: isFetching}
}
export const setBikesArray = (array) => {
    return {type: SET_BIKES_ARRAY, payload: array}
}
export const onClick = (index) => {
    return {type: ON_CLICK, payload: index}
}
export const resetValues = () => {
    return {type: RESET_VALUES}
}
