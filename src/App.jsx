import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import oneRecipe from "./pages/OneRecipe";
import axios from "axios"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:_id" component={oneRecipe} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     user: null,
//     isLoggedIn: false,
//     isLoading: true,
//   };

// handleLogin = (user) => {
//   this.setState({ user: user, isLoggedIn: true }, () => {
//     this.props.history.push("/profile");
//   });
// };

// componentDidMount() {
//   axios
//     .getLoggedInUser()
//     .then((response) => {
//       this.setState({
//         isLoading: false,
//         user: response.data,
//         isLoggedIn: true,
//       });
//          console.log(response.data, "in component did Mount");
//     })
//     .catch((error) => {
//       this.setState({ isLoading: false });
//       console.dir(error);
//     });
// }

// handleLogout = () => {
//   this.setState({ user: null, isLoggedIn: false });
// };

// render() {
//   console.log(this.state, "this is the state");

//   return (
//     <div className="App">
//       <NavMain />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/recipe/:_id" component={oneRecipe} />
//         <Route exact path="/signin" component={Signin} />
//         <Route exact path="/signup" component={Signup} />
//         <ProtectedRoute exact path="/profile" component={Profile} />
//       </Switch>
//     </div>
//   );
// }
// }


// export default withRouter(App);
