import React, {Component} from "react";
import Header from './component/Header/Header';
import History from './component/History/History';
import ChatInput from './component/ChatInput/ChatInput';
import Login from "./component/Login/Login";
import { BrowserRouter, Route, Routes} from "react-router-dom";
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
    handleLogin = (email, password) => {
        console.log(`Email: ${email}, Password: ${password}`)
      }
    send(event) {
        if (event.keyCode === 13) {
          sendMsg(event.target.value);
          event.target.value = "";
        }
      }


        render(){
            return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<div className="App">
                <Header/>
                <History history={this.state.history}/>
                <ChatInput send ={this.send}/>
                </div>
                }
                />
                <Route path="/login" element={
                    <Login handleLogin={this.handleLogin} />
                }
                />
            </Routes>
                
            </BrowserRouter>

            
            
            
            );
        }
    }

export default App; 

