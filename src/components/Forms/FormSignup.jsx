import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import "../../styles/Form.css"
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
      <form
        className="Form"
        onSubmit={this.handleSubmit}
        enctype="multipart/form-data"
      >
        <div className="intro">
          <h2 className="Form__title">JOIN US!</h2>
          <p>Create an account for free</p>
        </div>
        <div className="formBox">
          {this.state.message && (
            <div>
              <p>{this.state.message}</p>
            </div>
          )}
          <div className="Form__field">
            <label htmlFor="firstName">First Name</label><br />
            <input
              id="firstName"
              type="text"
              name="firstName"
              autoComplete="off"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label htmlFor="LastName">Last Name</label><br />
            <input
              id="LastName"
              type="text"
              name="LastName"
              autoComplete="off"
              value={this.state.LastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label htmlFor="email">Email</label><br />
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label htmlFor="password">Password</label><br />
            <input
              id="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="Form__field">
            <label htmlFor="avatar">Avatar</label><br />
            <input
              name="avatar"
              id="avatar"
              type="file"
              onChange={this.handleImage}
            />
          </div>
        </div>
        <div>
          <button className="Form__button">Submit</button>
        </div>
        <p> Already have an account? <a href="/auth/signup">Signin</a></p>
      </form>
    );
  }
}
export default withRouter(withUser(FormSignup));
