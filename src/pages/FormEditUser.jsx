import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser"

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

  handleSubmit = (event) => {
    event.preventDefault();
    //  const id = this.props.match.params.id;
    console.log("user")
    axios
      .patch(`http://localhost:4000/api/user/edit`, {
        firstName: this.state.firstName,
        LastName: this.state.LastName,
        email: this.state.email,

      }, { withCredentials: true })
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
        <form className="Form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.firstName}
              name="firstName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="LastName">Last Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.LastName}
              name="LastName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              value={this.state.password}
            />
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
            <input
              onChange={this.handleImage}
              name="avatar"
              type="file"

            />
          </div>
          <button>Submit</button><br />
          <Link to={`/profile`}><button>Nothing to edit</button></Link>
        </form>
      </div>
    );
  }
}

export default withUser(FormEditUser);
