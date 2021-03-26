import React from "react";
import FormSignup from "../components/Forms/FormSignup";

const Signup = (props) => {
  return  (
  <div className="Signup">
    <div className="Signup__form">
    <FormSignup handleLogin={props.handleLogin}/>
    </div>

    <div className="Signup__welcome">
    </div>
  </div>
  );
};

export default Signup;
