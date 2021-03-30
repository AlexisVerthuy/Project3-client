import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import oneRecipe from "./pages/OneRecipe";
import FormEditRecipe from "./pages/FormEditRecipe";
import FormCreateRecipe from "./pages/FormCreateRecipe"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipe/create" component={FormCreateRecipe} />
        <Route exact path="/recipe/:_id" component={oneRecipe} />
        <Route exact path="/recipe/edit/:_id" component={FormEditRecipe} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
