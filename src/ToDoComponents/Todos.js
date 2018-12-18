import React, { Component } from 'react';
import ToDoList from './ToDoList'
import Addbar from './Addbar';
class Todos extends Component {
    render() {
       const {currentText, setText, addTodo, todos} = this.props
        return (
            <div>
            <Addbar
            currentText = {currentText}
            setText = {setText}
            addTodo = {addTodo}/>
            <ToDoList todos = {todos}/>
            
        </div>
        );
    }
}

export default Todos;