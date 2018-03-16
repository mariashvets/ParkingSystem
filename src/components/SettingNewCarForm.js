import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setNewCar} from '../AC/index';

class SettingNewCarForm extends Component {

    state = {
        carType: null,
    };

    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                Select car type:
                <select defaultValue="" name="carType" onChange={this.handleChange}>
                    <option value=""  disabled >Choose new car type</option>
                    <option value="disabled">Disabled</option>
                    <option value="truck">Truck</option>
                    <option value="sedan">Sedan</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    handleChange = (ev) => {
        ev.preventDefault();
        this.setState({ carType: ev.target.value });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.carType);
        if(this.state.carType) this.props.setNewCar(this.state.carType);
    }
}

SettingNewCarForm.propTypes = {};
SettingNewCarForm.defaultProps = {};

export default connect(null, {setNewCar})(SettingNewCarForm);
