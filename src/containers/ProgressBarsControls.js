import React, {Component} from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import axios from 'axios';
import ProgressControl from '../components/ProgressControl/ProgressControl';
import classes from './ProgressBarsControls.css';

class ProgressBarsControls extends Component {
    state = {
        progressBarsControls: null,
        progressBarIndex: 0
    }

    // state= {
    //     progressBarsControls: {
    //         "buttons": [
    //             10,
    //             38,
    //             -13,
    //             -18
    //         ],
    //         "bars": [
    //             62,
    //             45,
    //             62
    //         ],
    //         "limit": 230
    //     },
    //     progressBarIndex: 0
    // }

    componentDidMount() {
        axios.get('http://pb-api.herokuapp.com/bars')
            .then(response => {
                this.setState({progressBarsControls: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    progressBarUpdateHandler = (index) => {
        const progress = {...this.state.progressBarsControls};
        const pBarIndex = this.state.progressBarIndex;
        progress.bars[pBarIndex] += progress.buttons[index];
        if(progress.bars[pBarIndex] <= 0){
            progress.bars[pBarIndex] = 0;
            const updatedProgress = progress;
            this.setState({progressBarsControls: updatedProgress});
        }else{
            const updatedProgress = progress;
            this.setState({progressBarsControls: updatedProgress});
        }
      
    }

    render() {
        let createBars = <p style={{textAlign: "center"}}>Loading...</p>;
        let createControls = <p style={{textAlign: "center"}}>Loading...</p>;
        let options;
        let select = <p style={{textAlign: "center"}}>Loading...</p>;

        if(this.state.progressBarsControls){
            createBars = this.state.progressBarsControls.bars.map((bar, index) => 
                (<ProgressBar key= {index} completed={bar}/>)
            );
            
            createControls = this.state.progressBarsControls.buttons.map((control, index) =>
                (<ProgressControl 
                    key = {index} 
                    label={control} 
                    clicked={() => this.progressBarUpdateHandler(index)}/>)
            );
            options = this.state.progressBarsControls.bars.map((control, index) =>
                (<option key = {index} value={index}> #Progress {index+1} </option>)
            );
            select = (
                <select className={classes.ProgressMenu} 
                        onChange={(event) => {this.setState({progressBarIndex: event.target.value})}}
                        value={this.state.progressBarIndex}>
                    {options}
                </select>
            );
        }
          
        return (
            <div style={{textAlign: "center"}} >
                {createBars}
                {select}
                {createControls}
            </div>
        );
    }
}

export default ProgressBarsControls;