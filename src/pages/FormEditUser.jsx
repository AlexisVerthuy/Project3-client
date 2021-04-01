import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser"
import "../styles/profile.css"

class FormEditUser extends React.Component {
  state = {
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    avatar: "",
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/api/user/profile`, { withCredentials: true })
      .then((response) => {
        const data = response.data;
        console.log(data)
        this.setState({
          firstName: data.firstName,
          LastName: data.LastName,
          email: data.email,
          password: data.password,
          avatar: data.avatar,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleImage = (event) => {
    const file = event.target.files[0]; 
    console.log("file", file);

    this.setState({ avatar: file });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //  const id = this.props.match.params.id;
    console.log("user")

    const formData = new FormData();

    formData.append("email", this.state.email);
    formData.append("password", this.state.password);
    formData.append("firstName", this.state.firstName);
    formData.append("LastName", this.state.LastName);
    formData.append("avatar", this.state.avatar);

    axios
      .patch(`http://localhost:4000/api/user/edit`, formData, { withCredentials: true })
      .then((response) => {
        this.props.context.setUser(response.data)
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Update your account!</h1>
        <form className="Form-edit" onSubmit={this.handleSubmit} enctype="multipart/form-data"
>         <ul>
            <li>
              <label htmlFor="firstName">First Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.firstName}
                name="firstName"
                type="text"
              />
              <span>Enter your first name here</span>
            </li>
            <li>
              <label htmlFor="LastName">Last Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.LastName}
                name="LastName"
                type="text"
              />
              <span>Enter your last name here</span>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                type="email"
              />
              <span>Enter your email here</span>

            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleChange}
                name="password"
                type="password"
                value={this.state.password}
              />
              <span>Create a new password here</span>
            </li>
            <li>
              <label htmlFor="avatar">Avatar</label>
              <input
                onChange={this.handleImage}
                name="avatar"
                type="file"
              />
            </li>
            <li>
              <button className="btn">Submit</button><br />
              <Link to={`/profile`}><button className="btn">Nothing to edit</button></Link>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default withUser(FormEditUser);
