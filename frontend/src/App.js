import React, {Component} from "react";
import Header from './component/Header/Header';
import History from './component/History/History';
import ChatInput from './component/ChatInput/ChatInput';
import {isHurtful, detectHateSpeech} from "./component/HateSpeechDetection/HateSpeechDetection";
import './App.css';
import {connect, sendMsg} from './api';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            history: [], 
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
    // handleLogin = (username) => {
    //     this.setState({ username, isLoggedIn: false});
    //     if (username !== '') {
    //       this.setState({ username, isLoggedIn: true });
    //       console.log("inside app.js", this.state);
    //     }
        
    //   }
    send(event) {
        if (event.keyCode === 13) {
            detectHateSpeech(event.target.value);
            console.log("output from the hatespeech component", isHurtful)
            sendMsg(event.target.value);
            if (isHurtful){
                sendMsg("BOT: Hate Speech Detected! Do not be rude.");
                
            }
          
          // add hate speech detection here
          event.target.value = "";
        }
      }
        render(){
            return (
                <div>
                  <Header />
                  <div className="chat-container">
                    <div className="chat-history">
                      <History username={this.state.username} history={this.state.history} />
                    </div>
                    <div className="chat-input">
                      <ChatInput send={this.send} />
                    </div>
                  </div>
                </div>
              );
              
        }
    }

export default App; 

