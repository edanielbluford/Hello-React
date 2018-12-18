import React, {Component} from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import Display from './Display';

class Counter extends Component{
constructor(){
    super();
    this.state = { current: 0 };
}
increment = () => {
    //this.state.current = This state.current +1;
    this.setState({current: this.state.current + 1});
}
decrement = () => {
    this.setState({current:this.state.current -1});
}
    render(){
        return(
            <div>
                Counter Goes Here
                <Decrementor minum = {this.decrement}/>
                <Display current = {this.state.current}/>
                <Incrementor plusle = {this.increment} />
            </div>
        )
    }
}

export default Counter;