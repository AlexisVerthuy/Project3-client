import React, { Component }  from "react";
import { withUser } from "../components/Auth/withUser";


const Profile = (props) => {
  console.log("props", props);

  return (
    <div>
      <h1>Welcome to your profile!</h1>
 
          <div>
          <p>{ props.context.user.avatar }</p>
            <p>{ props.context.user.firstName }</p>
            <p>{ props.context.user.LastName }</p>
            <button>Update my account</button><br/>
            <button>Delete my account</button>
          </div>

    </div>
  );
};

export default withUser(Profile);