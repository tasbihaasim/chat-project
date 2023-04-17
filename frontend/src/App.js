import React, {Component} from "react";
import Header from './component/Header/Header';
import History from './component/History/History';
import ChatInput from './component/ChatInput/ChatInput';
import './App.css';
import {connect, sendMsg} from './api';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            history: []
        }
    }
    componentDidMount(){
        connect((msg)=>{
            console.log("new message")
            
            this.setState(prevState => ({
                history : [...prevState.history, msg]

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
                    <History history={this.state.history}/>
                    <ChatInput send ={this.send}/>
                </div>

            );
        }
    }

export default App; 

