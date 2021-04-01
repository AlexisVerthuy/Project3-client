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
        <h1>{this.state.recipe.title}</h1>

        <div className="Recipe-intro">
          <div>
            <p>Level: {this.state.recipe.level}</p>
            <p>Time: {this.state.recipe.duration}min</p>
          </div>

          <div>
            <img className="recipe-img" src={this.state.recipe.picture} alt="dish" />
          </div>
        </div>
        <div className="Recipe-content">
          <div>
            <p>{this.state.recipe.instructions}</p>
          </div>

          <div>
            {this.state.recipe.ingredients.map((ingredient) => (
              <div key={ingredient._id}>
                <p>
                  {ingredient.quantity} {ingredient.unit} {ingredient.value}
                </p>
              </div>
            ))}
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
