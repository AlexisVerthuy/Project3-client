import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/global.css";
import Search from "./Search";
import OneRecipe from "./OneRecipe";
import RecipeCard from "./RecipeCard";

class Home extends React.Component {
  state = {
    recipes: [],
    searchValue: "",
  };

  handleSearch = (_, value) => {
    this.setState({ searchValue: value });
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/recipe")
      .then((response) => {
        this.setState({ recipes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>My food diary</h1>
          <img
            className="image-home"
            src="/images/homeBandeau.jpg"
            alt="Bandeau"
          />
        </div>
        <Search
          handleSearch={this.handleSearch}
          searchValue={this.state.searchValue}
        />
        <div>
          <br/>
        <button className="btn" id="add-home"><Link to={`/recipe/create`}> 👩🏽‍🍳 Add a new recipe !</Link></button>
        </div>

        <div className="cards">
        {this.state.recipes

          .filter((recipe) =>
            recipe.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
          )

          .map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />;
          })}
          </div>
      </div>
    );
  }
}

export default Home;
