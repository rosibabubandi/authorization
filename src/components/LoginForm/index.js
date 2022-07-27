import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', loginStatus: ''}

  getLoginSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      this.getLoginSuccess()
    } else if (
      (username !== 'rahul' && password !== 'rahul@2021') ||
      (username === '' && password === '')
    ) {
      this.setState({loginStatus: "*Username and Password didn't match"})
    } else if (username !== 'rahul' || username === '') {
      this.setState({loginStatus: '*Username is not found'})
    } else if (password !== 'rahul@2021' || password === '') {
      this.setState({loginStatus: '*Password is not found'})
    }
  }

  getPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="form-text">
          PASSWORD
        </label>
        <input
          id="password"
          className="input-field"
          value={password}
          type="password"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  getUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="form-text">
          USERNAME
        </label>
        <input
          id="username"
          className="input-field"
          value={username}
          type="text"
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {loginStatus} = this.state

    return (
      <>
        <div className="login-main-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-top-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            className="login-image-size"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.onSubmitLogin}>
            {this.getUsernameField()}
            {this.getPasswordField()}
            <button type="submit" className="login-button">
              Login
            </button>
            {loginStatus !== '' ? (
              <p className="login-status-text">{loginStatus}</p>
            ) : (
              ''
            )}
          </form>
        </div>
        <div className="login-medium-main-container">
          <div className="login-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-image-size"
              alt="website login"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitLogin}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-top-logo"
              alt="website logo"
            />
            {this.getUsernameField()}
            {this.getPasswordField()}
            <button type="submit" className="login-button">
              Login
            </button>
            {loginStatus !== '' ? (
              <p className="login-status-text">{loginStatus}</p>
            ) : (
              ''
            )}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
