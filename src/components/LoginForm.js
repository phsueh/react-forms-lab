import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })

  }

  handlePasswordChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return
    
    this.props.handleLogin(this.state)
  }

  render() {
    console.log(this.props)

    console.log(this.state)

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
              <input 
                id="username" 
                name="username" 
                type="text" 
                value={this.state.username} 
                onChange={event => this.handleUsernameChange(event)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
              <input 
                id="password" 
                name="password" 
                type="password" 
                value={this.state.password}
                onChange={event => this.handlePasswordChange(event)} 
              />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
