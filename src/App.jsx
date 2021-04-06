import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import OneRecipe from "./pages/OneRecipe";
import FormEditRecipe from "./pages/FormEditRecipe";
import FormCreateRecipe from "./pages/FormCreateRecipe";
import MyWeek from "./pages/MyWeek";
import FormEditUser from "./pages/FormEditUser";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/recipe/create"
          component={FormCreateRecipe}
        />
        <ProtectedRoute exact path="/recipe/:_id" component={OneRecipe} />
        <ProtectedRoute
          exact
          path="/recipe/edit/:_id"
          component={FormEditRecipe}
        />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/myweek" component={MyWeek} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/profile/edit" component={FormEditUser} />
      </Switch>
    </div>
  );
}

export default App;
