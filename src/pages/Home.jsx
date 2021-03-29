import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/global.css";
import Search from "./Search";
import OneRecipe from "./OneRecipe";

class Home extends React.Component {
  state = {
    recipes: [],
    searchValue: "",
  };

  handleSearch = (_, value) => {
    this.setState({ searchValue: value });
    //console.log("this is my set state", this.setState);
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

        {/* {this.state.recipes
          .filter((recipe) =>
            recipe.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
          )
          .map((recipe, index) => {
            return <OneRecipe key={index} recipe={recipe} />;
          })
          } */}
        <div className="cards">
          {this.state.recipes.map((recipe) => (
            <div key={recipe._id}>
              <p className="card-title">{recipe.title}</p>
              <img className="image-card" src={recipe.picture} alt="" />
              <Link to={`/recipe/${recipe._id}`}>See more !</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
