import React from "react";
import axios from "axios";

class MyProfile extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    const id = this.props.match.params._id;
    // console.log("this is the id", this.props.match.params);

    axios
      .get(`http://localhost:4000/api/profile/${id}`)
      .then((response) => {
        this.setState({ user: response.data });
        console.log("this is my account", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.user === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Welcome to your profile!</h1>

        <div>
          <div>
            <p>{this.state.user.avatar}</p>
            <p>{this.state.user.firstName}</p>
            <p>{this.state.user.lastName}</p>
            <button>Update my account</button><br/>
            <button>Delete my account</button>
          </div>

          <div>
            <button>Add a recipe</button>          
          </div>
      </div>
      </div>
    );
  }
}


export default MyProfile;
