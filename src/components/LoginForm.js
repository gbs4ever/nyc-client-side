import React, { Component } from 'react'
import {connect} from 'react-redux'
import { updateLoginForm } from '../actions/updateloginform'
import { login } from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom';
//using redux and react state
class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  }
//login is the fetch to the backend
  onSubmit = (event) => {
    event.preventDefault()
    this.props.updateLoginForm(this.state)
    this.props.login(this.state)
    .then(data => {
        if (data.error) {
          alert(data.error)
         } else {
          this.props.history.push('/search')
        }
      })
    this.setState({
      email: "",
      password: ""
    })
  };



  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })


  }

  render() {

    return (
      <div>
        <fieldset className="search">
          <form className="boxed" onSubmit={this.onSubmit}>
          <p> <strong>Please login:</strong></p>
 
          <label > Email:  </label>
          <input onChange={this.onChange} type="text" name="email" value={this.state.email} /> <br />
          <label > Password: </label>
          <input onChange={this.onChange} type="password" name="password" value={this.state.password} /> <br />
          <input type='submit' value= "Log In" />
        </form>
      
          </fieldset>
      
      </div>
    )
  }
}



export default withRouter(connect(null, { updateLoginForm,login })(LoginForm ))