import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/OneRecipe.css"

class OneRecipe extends React.Component {
  state = {
    recipe: null,
  };

  componentDidMount() {
    const id = this.props.match.params._id;

    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/recipe/${id}`)
      .then((response) => {
        this.setState({ recipe: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = () => {
    const id = this.props.match.params._id;
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/recipe/delete/${id}`;

    axios
      .delete(URL)

      .then((response) => {
        console.log("this is props ", this.props);
        this.props.history.push("/");
      })
      .catch((err) => console.log(`Err while deleting character: ${err}`));
  };

  render() {
    if (this.state.recipe === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h2>{this.state.recipe.title}</h2>

        <div className="recipe-intro">
          <div className="level">
            <p><b>Level</b>: {this.state.recipe.level}</p>
            <p><b>Time</b>: {this.state.recipe.duration}min</p>
          </div>

          <div>
            <img className="recipe-img" src={this.state.recipe.picture} alt="dish" />
          </div>
        </div>

        <div className="recipe-content">
          <div className="ingredients-box">
            {this.state.recipe.ingredients.map((ingredient) => (
              <div key={ingredient._id}>
                <ul>
                <li>
                  {ingredient.quantity} {ingredient.unit} {ingredient.value}
                </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="instructions-box">
          <ul>
            <li>
              {this.state.recipe.instructions}
            </li>
          </ul>
          </div>
        </div>
        <div>

          <button className="btn">
            <Link to={`/recipe/edit/${this.state.recipe._id}`}>
              Update recipe
            </Link>
          </button>

          <button className="btn" onClick={this.handleDelete}>Delete recipe</button>
        </div>
      </div>
    );
  }
}

export default OneRecipe;
