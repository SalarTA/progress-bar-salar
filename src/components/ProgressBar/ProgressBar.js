import React from 'react';
import classes from './ProgressBar.css';

const ProgressBar = (props) => {
   
    let completed = props.completed;
    let bgcolour = "#add8e6";
    if(props.completed > 100){
      completed = 100;
      bgcolour= "red";
    }
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolour,
      borderRadius: 'inherit',
      textAlign: 'right',
      transition: 'width 1s ease-in-out'
    }
  
    return (
      <div className={classes.ContainerStyles}>
        <div style={fillerStyles}>
            <div className={classes.LabelStyles}>{`${props.completed}%`}</div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;