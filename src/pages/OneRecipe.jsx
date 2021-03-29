import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        console.log("this is my recipe", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.recipe === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h1>Welcome to recipe detail</h1>
        <h1>{this.state.recipe.title}</h1>

        <div className="Recipe-intro">
          <div>
            <p>Level: {this.state.recipe.level}</p>
            <p>Time: {this.state.recipe.duration}min</p>
            <button>Add to my shopping list</button>
            <button>Add to my week</button>
          </div>

          <div>
            <img src={this.state.recipe.picture} alt="dish" />
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
        <Link to={`/recipe/edit/${this.state.recipe._id}`}><button>Update recipe</button></Link>
          <button>Delete recipe</button>
        </div>
      </div>
    );
  }
}

export default OneRecipe;
