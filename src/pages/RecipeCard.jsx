import React from "react";

import "./../styles/global.css";
import Search from "./Search";
import { Link } from "react-router-dom";

class RecipeCard extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p className="card-title">{this.props.recipe.title}</p>
          <img
            style={{ width: "300px", height: "200" }}
            className="image-card"
            src={this.props.recipe.picture}
            alt=""
          />
          <Link to={`/recipe/${this.props.recipe._id}`}>See more !</Link>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
