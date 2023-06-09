import React, {Component} from "react";
import './History.css';
import Message from '../Message/Message';

class History extends Component {
    render() {
        const messages = this.props.history.map((msg, index) => {
            return <Message key={index} message={msg.data} />;
            
        });

        return (
            <div className="history">
                {messages}
            </div>
        );
    }
}

export default History;
