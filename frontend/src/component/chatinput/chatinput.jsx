import React, {Component} from "react";
import './chatinput.scss';
import message from '../message/message'

class chatinput extends Component {
    render () {
        return (
            <div className="chatinput">
                <input onKeyDown={this.props.send} placeholder="type a message .. hit enter to send"></input>
            </div>

        )
    }

}
