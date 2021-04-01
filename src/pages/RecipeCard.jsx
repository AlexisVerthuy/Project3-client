import React from "react";
import axios from "axios";
import "./../styles/global.css";
import Search from "./Search";
import { Link } from "react-router-dom";

class RecipeCard extends React.Component {
  state = {
    recipe: [],
    isDisplayed: false,
  };

  toggleList = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

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
          <button type="button" onClick={this.toggleList}>
            Add to my week
          </button>
          <div>
            {this.state.isDisplayed && (
              <div>
                <label htmlFor="weekMeal">My Week Meal</label>
                <select
                  // onChange={this.handleChange}
                  name="weekMeal"
                  id="weekMeal"
                >
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
                <button
                  type="button"
                  onClick={() => {
                    console.log("clickd");
                    this.props.AddToMyWeekMeal({
                      monday: this.props.recipe._id,
                      // {monday:["123hytreinhd"]}
                      // tuesday: this.props.recipe._id,
                      // wednesday: this.props.recipe._id,
                      // thursday: this.props.recipe._id,,
                      // friday: this.props.recipe._id,,
                      // saturday: this.props.recipe._id,,
                      // sunday: this.props.recipe._id,,
                    });
                    // this.props.AddToMyWeekMealTuesday({
                    //   tuesday: this.props.recipe._id,
                    // });
                  }}
                >
                  Add
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeCard;
