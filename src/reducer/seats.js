import {SET_NEW_CAR, LOAD_PARKING_SEATS, SET_NEW_CAR_DISABLED} from '../constants';
import {parkingSettings} from '../fixtures';
import {OrderedMap, Record} from 'immutable';
import {arrayToMap} from '../utils';


const SeatModel = Record({
    id: null,
    type: null,
    available: true,
});

const ParkingSeats = Record ({
    'disabled': new OrderedMap,
    'sedan': new OrderedMap,
    'truck': new OrderedMap
});

const DefaultReducerState = Record({
    entities: new ParkingSeats(),
    types: ['disabled','truck','sedan']
});

export default (seats = new DefaultReducerState(), action) => {
    const {payload, type} = action;

    switch(type) {

        case LOAD_PARKING_SEATS:

            //TODO: how to improve?
            let disabled = arrayToMap(parkingSettings.seatsupd.disabled, SeatModel);
            let truck = arrayToMap(parkingSettings.seatsupd.truck, SeatModel);
            let sedan = arrayToMap(parkingSettings.seatsupd.sedan, SeatModel);

            return seats
                .setIn(['entities', 'disabled'], disabled)
                .setIn(['entities', 'truck'], truck)
                .setIn(['entities', 'sedan'], sedan);

        case SET_NEW_CAR:
            const {carType} = payload;
            let seatCarType = carType;

            let findFreeSeat = (usedCarType) => {
                let foundSeat = seats.entities[usedCarType].find(seat => seat.available);
                if(foundSeat) {
                    seatCarType = usedCarType;
                    return foundSeat;
                }
                return false;
            };

            let freeSeat = findFreeSeat(carType);

            if(!freeSeat) {
                switch (carType) {

                    case 'disabled':
                         freeSeat = findFreeSeat('truck') || findFreeSeat('sedan');
                         break;

                    case 'sedan':
                        freeSeat = findFreeSeat('truck');
                        break;
                }
            }

            if(freeSeat) {
                return seats.setIn(['entities', seatCarType, freeSeat.id, 'available'], false);
            }
    }

    return seats;
};