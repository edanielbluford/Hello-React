import React, {Component} from 'react';

class Incrementor extends Component{
    render(){
        const {plusle} =this.props;
        return(
            <div>
                <button onClick={plusle}>
                 Going Up?   
                </button>
            </div>
        );
    }
}

export default Incrementor;