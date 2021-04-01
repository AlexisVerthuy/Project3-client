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
    // console.log("this is the id", this.props.match.params);

    axios
      .get(`http://localhost:4000/api/recipe/${id}`)
      .then((response) => {
        //console.log("this is my set.state", this.setState);
        this.setState({ recipe: response.data });
        //console.log("this is my recipe", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete = () => {
    // console.log("this is my id", event);
    // const toDelete = confirm("Are you sure you want to delete?");
    // if (toDelete)
    const id = this.props.match.params._id;
    const URL = `http://localhost:4000/api/recipe/delete/${id}`;

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
            <button className="btn">Add to my week</button>
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
          {/* <Link to={`/toto/${oneToto._id}/edit`}>Edit</Link> */}

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
