import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.less';
import Parking from '../Parking';
import SettingNewCarForm from '../SettingNewCarForm';

function App(props) {
    return (
        <div>
            <SettingNewCarForm/>
            <Parking/>
        </div>
    );
}

App.propTypes = {
    store: PropTypes.object
};

export default App;

