import React, {Component} from "react";
import './chatinput.css';

class chatinput extends Component {
    render () {
        return (
            <div className="chatinput">
                <input onKeyDown={this.props.send} placeholder="type a message .. hit enter to send"></input>
            </div>

        )
    }

}

export default chatinput;