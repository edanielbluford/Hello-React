import React, {Component} from 'react';

class Decrementor extends Component{
    render(){
        const {minum} = this.props;
        return(
            <div>
                <button onClick={minum}>
                Going Down?
                </button>
            </div>
        );
    }
}

export default Decrementor;