import React, {Component} from 'react';
import CounterChild from './CounterChild'
class CounterContainer extends Component{
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
            <CounterChild
            decrement ={this.decrement}
            current = {this.state.current}
            increment ={this.increment}
            />
        )
    }
}

export default CounterContainer;