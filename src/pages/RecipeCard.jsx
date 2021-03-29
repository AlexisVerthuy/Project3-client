import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/global.css";

class RecipeCard extends React.Component {
  state = {
    recipes: [],
  };

  //   componentDidMount() {
  //     axios
  //       .get("http://localhost:4000/api/recipe/${id}")
  //       .then((response) => {
  //         this.setState({ recipes: response.data });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   handleSearch = (_, value) => {
  //     this.setState({ searchValue: value });
  //   };

  render() {
    return (
      <div>
        {/* <div className="cards">
          {this.state.recipes.map((recipe) => (
            <div key={recipe._id}>
              <p className="card-title">{recipe.title}</p>
              <img className="image-card" src={recipe.picture} alt="" />
              <Link to={`/recipe/${recipe._id}`}>See more !</Link>
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default RecipeCard;
