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
      <form 
      className="Form"
      onChange={this.handleChange} 
      onSubmit={this.handleSubmit}>
        <div className= "intro">
          <h2 className="Form__title">Welcome Back !</h2>
          <p>We've missed you</p>
        </div>
          <label htmlFor="email">Email</label><br/>
          <input type="email" id="email" name="email" /><br/>
          <label htmlFor="password">Password</label><br/>
          <input type="password" id="password" name="password" /><br/>
          <button className="Form__button">Submit</button>
          <p>Don't have an account yet? <a href="/auth/signin">Signup</a></p>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignin));
