import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   })
 }

 handleSubmit = event => {
   event.preventDefault()

   if (!this.state.username || !this.state.password) return

   this.props.handleLogin(this.state)
 }

  render() {
    console.log(this.props);
    return (
      <form onSubmit ={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" onChange ={this.handleChange} name="username" type="text" value ={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange ={this.handleChange} name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
