import React, {Component} from 'react';

class TodoList extends Component {
    
    render(){
    const {todos} = this.props;
    const todolist = todos.map(t => <li key = {t}> {t} </li>);
        return(
                <ul>
                    {todolist}
                </ul>
        );
    }
}
export default TodoList;