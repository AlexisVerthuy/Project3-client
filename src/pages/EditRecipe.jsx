import axios from "axios";
import React, { Component } from "react";

class FormRecipe extends Component {
    state = {
      title: "",
      picture: "",
      level: "",
      duration: 0,
      ingredients: "",
      instructions: "",
      creator: "",
      type: "",
    };

    handleChange = (event) => {
        const key = event.target.name;
        this.setState({ [key]: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();

    axios
      .post("http://localhost:3000/api/recipe/edit/${id}", {
        title: this.state.title,
        level: this.state.level,
        duration: this.state.duration,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
        creator: this.state.creator,
        type: this.state.type,
      })
      .then((response) => {
        this.props.history.push("/recipes");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="picture">Picture</label>
          <input
            name="picture"
            value={this.state.picture}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="level">Level</label>
          <input
            onChange={this.handleChange}
            value={this.state.level}
            name="level"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <input
            name="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions</label>
          <input
            name="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="creator">Creator</label>
          <input
            name="creator"
            value={this.state.creator}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input
            name="type"
            value={this.state.type}
            onChange={this.handleChange}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

    export default FormRecipe;
