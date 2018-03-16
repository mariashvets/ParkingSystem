import {SET_NEW_CAR, LOAD_PARKING_SEATS} from '../constants';

export function loadSeats(){
    return {
        type: LOAD_PARKING_SEATS
    }
}

export function setNewCar(carType) {
    return {
        type: SET_NEW_CAR,
        payload: {carType}
    }
}