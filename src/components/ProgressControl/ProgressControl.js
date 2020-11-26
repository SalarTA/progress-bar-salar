import React from 'react';
import classes from './ProgressControl.css';

const ProgressControl = (props) => (

        <button className={classes.ProgressBarControl} onClick={props.clicked}>
            {props.label}
        </button>
    
);

export default ProgressControl;