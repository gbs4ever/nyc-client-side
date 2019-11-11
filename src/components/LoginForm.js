import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLoginForm } from "../actions/updateloginform";
import { login } from "../actions/currentUser.js";
import { withRouter } from "react-router-dom";
import { MDBContainer, MDBCol, MDBBtn } from "mdbreact";
//using redux
class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
  //login is the fetch to the backend
  onSubmit = event => {
    event.preventDefault();
    this.props.updateLoginForm(this.state);
    this.props.login(this.state).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.history.push("/search");
      }
    });
    this.setState({
      email: "",
      password: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="boxcenter">
        <MDBContainer>
          <MDBCol md="12">
            <form onSubmit={this.onSubmit}>
              <p className="h4 text-center mb-4">
                {" "}
                <u>
                  <strong>Please login:</strong>
                </u>
              </p>
              <label
                icon="envelope"
                htmlFor="defaultFormLoginEmailEx"
                className="blue-text"
              >
                Your email:
              </label>
              <input
                id="defaultFormLoginEmailEx"
                className="form-control"
                onChange={this.onChange}
                type="text"
                name="email"
                value={this.state.email}
              />{" "}
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="blue-text">
                Your password
              </label>
              <input
                id="defaultFormLoginPasswordEx"
                className="form-control"
                onChange={this.onChange}
                type="password"
                name="password"
                value={this.state.password}
              />{" "}
              <br />
              <MDBBtn color="indigo" type="submit">
                Login
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBContainer>
      </div>
    );
  }
}

export default withRouter(connect(null, { updateLoginForm, login })(LoginForm));
