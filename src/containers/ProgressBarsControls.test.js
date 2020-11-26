import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import ProgressControl from '../components/ProgressControl/ProgressControl';
import ProgressBarsControls from './ProgressBarsControls';

configure({adapter: new Adapter()});

describe('<ProgressBar/>', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<ProgressBarsControls />);
        wrapper.setState({
            progressBarsControls: {
                "buttons": [
                    10,
                    38,
                    -13,
                    -18
                ],
                "bars": [
                    62,
                    45,
                    62
                ],
                "limit": 230
            },
            progressBarIndex: 0
        });
    });

    it('should render 3 <ProgressBar> elements with a random state', () => {   
        expect(wrapper.find(ProgressBar)).toHaveLength(3);
    });

    it('should render 4 <ProgressControl> elements with a random state', () => {   
        expect(wrapper.find(ProgressControl)).toHaveLength(4);
    });
});
