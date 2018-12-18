import React, {Component} from 'react';


class Display extends Component{
    render(){
        return(
            <div>
                {this.props.current}
            </div>
        );
    }
}

export default Display;