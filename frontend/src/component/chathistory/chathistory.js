import React, {Component} from "react";
import './chathistory.css';
import message from '../message/message'

class chathistory extends Component{
    render(){
        console.log(this.props.chathistory)
        const messages = this.props.chathistory.map(msg=><message key={msg.timestamp} message={msg.data}/>);
    return(
        <div className="chathistory">
            <h2>chat history</h2>
            {messages}
        </div>
    );
    }
}
export default chathistory;