import React, {Component} from "react";
import './Message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        console.log("message prop:", temp);
        this.state={
            message: temp
        }
    }
    render(){
        console.log("This state's message body is:", this.props.message.body);
        return(
            <div className="message">
                <p style={{ color: "black" }}>{this.state.message.body}</p>
            </div>
        );
    };
}

export default Message;
