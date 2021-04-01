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
    weekMeal: {
      monday: [],
      // tuesday: [],
      // wednesday: [],
      // thursday: [],
      // friday: [],
      // saturday: [],
      // sunday: [],
    },
  };

  handleSearch = (_, value) => {
    this.setState({ searchValue: value });
    //console.log("this is my set state", this.setState);
  };
  // {monday:["123hytreinhd"]}
  AddToMyWeekMeal = (meals) => {
    console.log("this is meals", meals);
    const mondayArray = [...this.state.weekMeal.monday];
    mondayArray.push(meals.monday);

    this.setState({
      weekMeal: {
        monday: mondayArray,
      },
    });
  };

  // AddToMyWeekMeal = (event) => {
  //   const weekArray = [...this.state.weekMeal[].];
  //   tuesdayArray.push(event.tuesday);

  //   this.setState({
  //     weekMeal: {
  //       tuesday: tuesdayArray,
  //     },
  //   });
  // };
  // AddToMyWeekMeal = (event,meals) => {
  //   const {name,value}= [...this.state.weekMeal.monday];
  //   mondayArray.push(meals.monday);

  //   //console.log(meals);
  //   //console.log("this is meals", meals);
  //   //console.log("this is state,", this.state);
  //   this.setState({
  //     weekMeal: {
  //       monday: mondayArray,
  //     },
  //   });
  //   // this.setState({ weekMeal: { ...this.state.weekMeal, meals } });
  //   //console.log("this.props.", this.props.match.params);
  // };
  componentDidUpdate() {
    axios
      .patch(`http://localhost:4000/api/user/weekplan`, this.state.weekMeal, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
    console.log("this is new state,", this.state);
    return (
      <div>
        <div>
          {/* <h1>My food diary</h1> */}
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
          <br />
          <b>
            <Link to={`/recipe/create`}> 👩🏽‍🍳 Add a new recipe !</Link>
          </b>
        </div>

        {this.state.recipes

          .filter((recipe) =>
            recipe.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase())
          )

          .map((recipe, index) => {
            //console.log("this is map search bar", recipe);
            return (
              <RecipeCard
                key={index}
                recipe={recipe}
                AddToMyWeekMeal={this.AddToMyWeekMeal}
                AddToMyWeekMealTuesday={this.AddToMyWeekMealTuesday}
                //handleAdd={this.state.handleAdd}
              />
            );
          })}
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

export default Home;
