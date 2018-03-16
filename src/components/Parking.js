import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapToArray} from '../utils';
import {loadSeats} from '../AC/index';

class Parking extends Component {

    static propTypes = {
        seats: PropTypes.object
    };

    componentWillMount() {
        this.props.loadSeats();
    }

    render() {
        return (
            <div>
                {this.renderSeats()}
            </div>
        );
    }

    renderSeats() {
        const {seats} = this.props;
        if(!seats || !seats.size) return null;
        return seats.types.map(type => mapToArray(seats.entities[type]).map(seat => this.renderSeat(seat)));
    };

    renderSeat(seat) {
        //TODO: create separate component
        let status = seat.available ? 'Available' : 'Busy already';
        return (<div key={seat.number}>
            <span>Seat:{seat.type}</span>
            <span>{status}</span>
        </div>)
    };

}

function mapStateToProps (state) {
    return {
        seats: state.seats
    }
}

export default connect(mapStateToProps, {loadSeats})(Parking);
