import React, {Component} from 'react';
import './Main.css';
import Counter from '../CounterComponents/CounterContainer';
import TodoContainer from '../ToDoComponents/TodoContainer';

class Main extends Component {
    render(){
        return(
            <main>
                <Counter/>
                <TodoContainer/>
            </main>
        );
    }
}


export default Main;