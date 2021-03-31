import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import oneRecipe from "./pages/OneRecipe";
import MyWeek from "./pages/MyWeek";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/:_id" component={oneRecipe} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/myweek" component={MyWeek} />
        <ProtectedRoute exact path="/profile/:id" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
