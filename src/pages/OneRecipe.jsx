import React from "react";
import axios from "axios";

class OneRecipe extends React.Component {

  state = {
    recipe: [],
  };

  componentDidMount() {
    const id = this.props.match.params.toto;

    axios
      .get(`http://localhost:4001/api/recipe/${id}`)
      .then((response) => {
        this.setState({ recipe: response.data });
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
      <div className = "container">
<h1>Welcome to recipe detail</h1>
        <h1>{this.state.recipe.title}</h1>

        <div className = "Recipe-intro">
            <div>
            {this.state.recipe.level} 
            {this.state.recipe.duration}
            <button>Add to my shopping list</button>
            <button>Add to my week</button>
            </div>

            <div>
            <img src={this.state.recipe.picture} alt="dish" />
            </div>

        </div>

        <div className = "Recipe-content">
            <div>
            {this.state.recipe.ingredients} 
            </div>
            <div>
            {this.state.recipe.steps} 
            </div>
        </div>

        <div>
            <button>Update recipe</button>
            <button>Delete recipe</button>

        </div>
      </div>
    );
  }
}

export default OneRecipe;
