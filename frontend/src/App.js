import React, {Component} from "react";
import header from './component/header/header';
import chathistory from './component/chathistory/chathistory';
import chatinput from './component/chatinput/chatinput';
import './App.css';
import {connect, sendMsg} from './api';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            chathistory: []
        }
    }
    componentDidMount(){
        connect((msg)=>{
            console.log("new message")
            this.setState(prevState => ({
                chathistory : [...prevState.chathistory, msg]

            } ))
            console.log(this.state);

        }
        
        );
    }
        render(){
            return (
                <div className="App">
                    <header/>
                    <chathistory chathistory={this.state.chathistory}/>
                    <chatinput send ={this.send}/>
                </div>

            );
        }
    }

export default App; 

