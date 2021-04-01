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
            style={{ width: "250px", height: "200px" }}
            className="image-card"
            src={this.props.recipe.picture}
            alt=""
          />
          <button className="btn"><Link to={`/recipe/${this.props.recipe._id}`}>See more !</Link></button>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
