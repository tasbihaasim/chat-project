import React, {Component} from "react";
import './ChatHistory.css';
import Message from '../Message/Message'

class ChatHistory extends Component{
    render(){
        console.log(this.props.ChatHistory)
        const messages = this.props.ChatHistory.map(msg=><Message key={msg.timestamp} message={msg.data}/>);
    return(
        <div className="ChatHistory">
            <h2>chat history</h2>
            {messages}
        </div>
    );
    }
}
export default ChatHistory;