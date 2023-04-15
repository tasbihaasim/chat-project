import React, {Component} from "react";
import './ChatInput.css';

class ChatInput extends Component {
    render () {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} placeholder="type a message .. hit enter to send"/>
            </div>

        )
    }

}

export default ChatInput;