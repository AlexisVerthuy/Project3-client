import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";
import "./../../styles/Form.css"

class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        
        <div className="intro">
        <h1 > Welcome Back !</h1>
        <p>We've missed you</p>
      </div>

      <form 
      className="Form-edit"
      onChange={this.handleChange} 
      onSubmit={this.handleSubmit}>

          <ul>
            <li>
              <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email" />
                <span>Enter your email here</span>
            </li>
            <li>
              <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" name="password"/>
                <span>Enter your password here</span>

            </li>
            <li>
              <button className="btn">Submit</button>
            </li>
          </ul>
          <p><b>Don't have an account yet? </b><a href="/auth/signin">Signup</a></p>
      </form>
      </div>
    );
  }
}

export default withRouter(withUser(FormSignin));
