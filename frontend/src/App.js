import React, {Component} from "react";
import Header from './component/Header/Header';
import ChatHistory from './component/ChatHistory/ChatHistory';
import ChatInput from './component/ChatInput/ChatInput';
import './App.css';
import {connect, sendMsg} from './api';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            ChatHistory: []
        }
    }
    componentDidMount(){
        connect((msg)=>{
            console.log("new message")
            this.setState(prevState => ({
                ChatHistory : [...prevState.ChatHistory, msg]

            } ))
            console.log(this.state);

        }
        
        );
    }
    send(event) {
        if (event.keyCode === 13) {
          sendMsg(event.target.value);
          event.target.value = "";
        }
      }


        render(){
            return (
                <div className="App">
                    <Header/>
                    <ChatHistory ChatHistory={this.state.ChatHistory}/>
                    <ChatInput send ={this.send}/>
                </div>

            );
        }
    }

export default App; 

