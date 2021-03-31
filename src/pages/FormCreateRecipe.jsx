import axios from "axios";
import React, { Component } from "react";
import FormInsertNewIngredient from '../components/FormInsertNewIngredient';

class FormCreateRecipe extends Component {
    state = {
        title: "",
        serving: 0,
        level: "Easy",
        duration: "",
        ingredients: [],
        instructions: "",
        creator: "",
        type: "",
    };

    handleChange = (event) => {
        const key = event.target.name;
        this.setState({ [key]: event.target.value });
    };

    AddNewIngredient = (ingredient) => {
        console.log(ingredient)
        this.setState({ ingredients: [...this.state.ingredients, ingredient] })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("clickty click");

        axios
            .post("http://localhost:4000/api/recipe/create", {
                title: this.state.title,
                serving: this.state.serving,
                level: this.state.level,
                duration: this.state.image,
                ingredients: this.state.ingredients,
                instructions: this.state.instructions,
                creator: this.state.creator,
                type: this.state.type,
            })
            .then((response) => {
                this.props.history.push("/");
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
                    <label htmlFor="serving">Serving</label>
                    <input
                        id="serving"
                        onChange={this.handleChange}
                        value={this.state.serving}
                        name="serving"
                        type="serving"
                    />
                </div>
                <div>
                    <label htmlFor="level">Level</label>
                    <select onChange={this.handleChange} value={this.state.level} name="level" id="level">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Difficult">Difficult</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        onChange={this.handleChange}
                        name="duration"
                        type="number"
                        value={this.state.duration}
                    />
                </div>
                <div>
                    <label htmlFor="">Ingredients:</label>
                    <div>
                        {this.state.ingredients.map((ingredient) => (
                            <div key={ingredient._id}>
                                <p>
                                    {ingredient.quantity} {ingredient.unit} {ingredient.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <FormInsertNewIngredient handleClick={this.AddNewIngredient} />
                </div>
                <div>
                    <label htmlFor="">instructions</label>
                    <input className="input_instructions"
                        onChange={this.handleChange}
                        name="instructions"
                        type="text"
                        value={this.state.instructions}
                    />
                </div>
                <div>
                    <label htmlFor="">Creator</label>
                    <input
                        onChange={this.handleChange}
                        name="creator"
                        type="text"
                        value={this.state.creator}
                    />
                </div>
                <div>
                    <label htmlFor="">type</label>
                    <input
                        onChange={this.handleChange}
                        name="type"
                        type="text"
                        value={this.state.type}
                    />
                </div>
                <button>Submit</button>
            </form>
        );
    }
}

export default FormCreateRecipe;
