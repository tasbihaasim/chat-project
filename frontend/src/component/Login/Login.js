import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Login extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.handleLogin(email, password)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login
