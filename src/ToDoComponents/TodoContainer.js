import React, {Component} from 'react';
import Todos from './Todos';

class TodoContainer extends Component {
    constructor() {
        super();
        this.state = {
            todos: ["A", "B", "C"],
            currentText: ""
        };
    }
    setText = (userInput) =>{
        const newValue = userInput.target.value;
        this.setState({currentText:newValue})  
    }
    addTodo = () => {
        const newTodo = this.state.currentText;
        const newTodos = [...this.state.todos, newTodo];
        this.setState({todos: newTodos, currentText:''})
        
    }
    render(){
        const {currentText, todos} = this.state;
        return(
            <Todos
            currentText ={currentText}
            setText ={this.setText}
            addTodo ={this.addTodo}
            todos = {todos}
     />
        );
    }
}
export default TodoContainer;