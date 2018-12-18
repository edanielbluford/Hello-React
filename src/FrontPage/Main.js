import React, {Component} from 'react';
import './Main.css';
import Counter from '../CounterComponents/Counter'

class Main extends Component {
    render(){
        return(
            <main>
                <Counter/>
            </main>
        );
    }
}


export default Main;