import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import "../../styles/FormSignUp.css"
import apiHandler from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    avatar: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleImage = (event) => {
    const file = event.target.files[0]; 
    console.log(file);

    this.setState({ avatar: file });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("firstName", this.state.firstName);
    formData.append("LastName", this.state.LastName);
    formData.append("avatar", this.state.avatar);

    apiHandler
      .signup(formData)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        this.setState({ message: error.response.data.message });
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        
        <div className="intro">
        <h1 > JOIN US!</h1>
        <p>Create an account for free</p>
      </div>

      <form
        className="Form-edit"
        onSubmit={this.handleSubmit}
        enctype="multipart/form-data"
      >        
          <div>
            {this.state.message && (
              <div>
                <p>{this.state.message}</p>
              </div>
            )}
        <ul>
          <li>
            <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                autoComplete="off"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            <span>Enter your first name here</span>
          </li>
          <li>
            <label htmlFor="LastName">Last Name</label><br />
                <input
                  id="LastName"
                  type="text"
                  name="LastName"
                  autoComplete="off"
                  value={this.state.LastName}
                  onChange={this.handleChange}
              />
            <span>Enter your last name here</span>
          </li>
          <li>
            <label htmlFor="email">Email</label><br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
            <span>Enter your email here</span>
          </li>
          <li>
            <label htmlFor="password">Password</label><br />
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
            <span>Create a new password here</span>
          </li>
          <li>
            <label htmlFor="avatar">Avatar</label><br />
                <input
                  name="avatar"
                  id="avatar"
                  type="file"
                  onChange={this.handleImage}
                />
          </li>
          <li>
          <button className="btn">Submit</button>
          </li>
        </ul>
        </div>
        <p> <b>Already have an account? </b><a href="/auth/signup">Signin</a></p>
      </form>
      </div>
    );
  }
}
export default withRouter(withUser(FormSignup));
