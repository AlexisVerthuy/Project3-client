import React, { Component }  from "react";
import { withUser } from "../components/Auth/withUser";
import { Link } from "react-router-dom";


const Profile = (props) => {
  console.log("props", props);

  return (
    <div>
      <h1>Welcome to your profile!</h1>
 
          <div>
          <img src={ props.context.user.avatar } alt="Profile picture"/>
            <p>{ props.context.user.firstName } { props.context.user.LastName }</p>
            <Link to={`/profile/edit`}><button>Update my account</button></Link><br/>
            <button>Delete my account</button>
          </div>

    </div>
  );
};

export default withUser(Profile);