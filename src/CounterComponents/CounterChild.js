import React, {Component} from 'react';

import Decrementor from "./Decrementor";
import Incrementor from './Incrementor';
import Display from './Display';

class CounterChild extends Component{
    render(){
        const {decrement, current, increment} = this.props;
        return(
            <div>
                Counter Goes Here
                <Decrementor minum = {decrement}/>
                <Display current = {current}/>
                <Incrementor plusle = {increment} />
            </div>
        );
    }
} 
export default CounterChild;