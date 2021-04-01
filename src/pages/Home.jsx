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
    //console.log("this is my set state", this.setState);
  };
  // {monday:["123hytreinhd"]}
  // AddToMyWeekMeal = (meals) => {
  //   //console.log("this is meals", meals);
  //   const mondayArray = [...this.state.weekMeal.monday];
  //   mondayArray.push(meals.monday);

  //   this.setState({
  //     weekMeal: {
  //       monday: mondayArray,
  //     },
  //   });
  // };

  // AddToMyWeekMeal = (meals) => {
  //   const mondayArray = [...this.state.weekMeal.monday];
  //   // const tuesdayArray = [...this.state.weekMeal.tuesday];
  //   // const wednesdayArray = [...this.state.weekMeal.wednesday];
  //   // const thursdayArray = [...this.state.weekMeal.thursday];
  //   // const fridayArray = [...this.state.weekMeal.friday];
  //   // const saturdayArray = [...this.state.weekMeal.saturday];
  //   // const sundayArray = [...this.state.weekMeal.sunday];
  //   //mondayArray.push(meals.monday);
  //   // tuesdayArray.push(meals.tuesday);
  //   // wednesdayArray.push(meals.wednesday);
  //   // thursdayArray.push(meals.thursday);
  //   // fridayArray.push(meals.friday);
  //   // saturdayArray.push(meals.saturday);
  //   // sundayArray.push(meals.sunday);

  //   this.setState({
  //     weekMeal: {
  //       monday: this.state.mondayArray,
  //       // tuesday: tuesdayArray,
  //       // wednesday: wednesdayArray,
  //       // thursday: thursdayArray,
  //       // friday: fridayArray,
  //       // saturday: saturdayArray,
  //       // sunday: sundayArray,
  //     },
  //   });
  // };
  // AddToMyWeekMeal = (meals) => {

  // let value;
  //const weekArray = [...this.state.weekMeal.value]

  //   const {name,value}= [...this.state.weekMeal.value;
  //   mondayArray.push(meals.[day]);

  //   //console.log(meals);
  //   //console.log("this is meals", meals);
  //   //console.log("this is state,", this.state);

  // const name = event.target.value
  //   this.setState({
  //     weekMeal: {
  //       [name]: value,
  //     },
  //   });
  //   // this.setState({ weekMeal: { ...this.state.weekMeal, meals } });
  //   //console.log("this.props.", this.props.match.params);
  // };
  componentDidUpdate() {
    const id = this.props.match.params._id;
    console.log("this is id", this.props.match.params);
    axios
      .patch(
        `http://localhost:4000/api/user/weekplan`,

        {
          day: this.state.day,

          /*recipeId: this.state.recipes._id */
        },
        {
          withCredentials: true,
        }
      )
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
    // console.log("this is new state,", this.state);
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

        <div className="searchBar">
          {this.state.recipes

            .filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(this.state.searchValue.toLowerCase())
            )

            .map((recipe, index) => {
              //console.log("this is map search bar", recipe);
              return <RecipeCard key={index} recipe={recipe} />;
            })}
        </div>
      </div>
    );
  }
}

export default Home;
