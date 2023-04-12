import React, {Component} from "react";
import './message.css';

class message extends Component {
    constructor(props) {
        super(props);
        let tmp = JSON.parse(this.parse.message);
        this.state={
            message: tmp
        }
    }
    render(){
        return(
            <div className="message">
                {this.state.message.body}
            </div>

        );
    };
}

export default message;