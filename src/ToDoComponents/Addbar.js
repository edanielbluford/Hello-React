import React, { Component } from 'react';

class Addbar extends Component {
    render() {
        const {currentText, setText, addTodo} = this.props;
        return (
            <div>
                <input 
                type= "text" 
                value ={currentText}
                onChange = {setText}></input>
                <button onClick={addTodo}> Add </button>
            </div>
        );
    }
}

export default Addbar;