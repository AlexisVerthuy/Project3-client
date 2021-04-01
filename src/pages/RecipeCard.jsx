import React from "react";
import axios from "axios";
import "./../styles/global.css";
import Search from "./Search";
import { Link } from "react-router-dom";

class RecipeCard extends React.Component {
  state = {
    recipe: [],
    isDisplayed: false,
    day: "monday",
  };

  toggleList = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ day: event.target.value });
  };

  handleAddMealPlan = () => {
    console.log(this.state.day, this.props.recipe._id);
    axios
      .patch(
        process.env.REACT_APP_BACKEND_URL + "/api/user/weekplan",
        {
          day: this.state.day,
          recipeId: this.props.recipe._id,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      });
  };

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
          <button className="btn" type="button" onClick={this.toggleList}>
            Add to my week
          </button>
          <div>
            {this.state.isDisplayed && (
              <div>
                <label htmlFor="weekMeal">My Week Meal</label>
                <select
                  value={this.state.day}
                  onChange={this.handleChange}
                  name="day"
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
                <button className="weekBtn"
                  onClick={this.handleAddMealPlan}
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
