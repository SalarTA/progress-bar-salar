import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import ProgressBarsControls from '../../containers/ProgressBarsControls';
import classes from './Layout.css';

class Layout extends Component {
    render(){
        return(
            <Aux>
                <h1>Progress Bar Demo</h1>
                <ProgressBarsControls className={classes.Content}/>                
            </Aux>
        );
        
    }
}

export default Layout;