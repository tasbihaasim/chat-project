import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { Component } from 'react';
import { auth, firestore } from './firebase-config';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: '',
      registerPassword: '',
      loginEmail: '',
      loginPassword: '',
      userName: '', // Added userName states
    };
  }

  // sendUserNameToBackend = () => {
  //   const { userName } = this.state;
  //   newpool(userName);
  //   console.log(newpool)
  // };
  

  componentDidMount() {
    onAuthStateChanged(auth, (currentUser) => {
      this.setState({ userName: currentUser });
    });
  }

  register = async () => {
    const { registerEmail, registerPassword, userName } = this.state;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = userCredential.user;

      // Save additional user information (username) in Firestore or Realtime Database
      const userDocRef = firestore.collection('users').doc(user.uid);
      await userDocRef.set({ username: userName });

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  login = async () => {
    const { loginEmail, loginPassword} = this.state;
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      //this.sendUserNameToBackend(userName); // Pass the userName as an argument
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    
  };

  logout = async () => {
    await signOut(auth);
  };

  handleUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  render() {
    const { registerEmail, registerPassword, userName} = this.state;

    return (
      <div className="login">
        <div>
          <h3> Register User </h3>
          <input
            placeholder="Email..."
            value={registerEmail}
            onChange={(event) => {
              this.setState({ registerEmail: event.target.value });
            }}
          />
          <input
            placeholder="Password..."
            value={registerPassword}
            onChange={(event) => {
              this.setState({ registerPassword: event.target.value });
            }}
          />
          <input
            placeholder="Username"
            value={userName}
            onChange={(event) => {
              this.setState({ userName: event.target.value });
            }}
          />

          <button onClick={this.register}> Create User</button>
        </div>
        <div>
      <h3> Login </h3>
      <input
        placeholder="Email..."
        onChange={(event) => {
          this.setState({ loginEmail:event.target.value});
        }}
      />
      <input
        placeholder="Password..."
        onChange={(event) => {
          this.setState({ loginPassword: event.target.value});
        }}
      />
      <button onClick={this.login}> Login</button>
    </div>

    <button onClick={this.logout}> Sign Out </button>
  </div>
    );
  }
}

export default Login;
