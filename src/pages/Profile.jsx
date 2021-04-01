import React, { Component } from "react";
import axios from "axios";
import { withUser } from "../components/Auth/withUser";
import { Link } from "react-router-dom";
import "../styles/profile.css";

class Profile extends React.Component {
  // const Profile = (props) => {
  //   console.log("props", props);

  componentDidMount() {
    const user = this.props.context.user;
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:4000/api/user/profile`, { withCredentials: true })
      .then((response) => {
        this.setState({ user: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = () => {
    const user = this.props.context.user;
    const URL = `http://localhost:4000/api/user/profile/delete`;

    console.log("this is my user:", user);

    axios
      .delete(URL, { withCredentials: true })

      .then((response) => {
        console.log("this is my response:", response);
        this.props.context.setUser(null);
        this.props.history.push("/");
      })
      .catch((err) => console.log(`Err while deleting character: ${err}`));
  };

  render() {
    // if (this.props.context.setUser === null) {
    //   return ;
    // }

    return (
      <div>
        <h1>Welcome {this.props.context.user.firstName}</h1>
        <div className="profile">
          <div className="bloc1">
            <img
              className="profile-pic"
              src={this.props.context.user.avatar}
              alt="Profile picture"
            />
            <h2>
              {this.props.context.user.firstName}{" "}
              {this.props.context.user.LastName}
            </h2>
            <Link to={`/profile/edit`}>
              <button className="btn">Update my account</button>
            </Link>
            <br />
            <button className="btn" onClick={this.handleDelete}>
              Delete my account
            </button>
          </div>

          <div className="bloc2">
            <p>What I like!</p>
            <button className="btn">
              <Link to={`/recipe/create`}> 👩🏽‍🍳 Add a new recipe !</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(Profile);
