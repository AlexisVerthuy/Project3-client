import axios from "axios";
import React, { Component } from "react";
import FormInsertNewIngredient from '../components/FormInsertNewIngredient';
import "./../styles/AddRecipe.css"


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
            .post(`${process.env.REACT_APP_BACKEND_URL}/api/recipe/create`, {
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
            <div>
                <h2>👩🏽‍🍳 Add a new recipe!</h2>
            <form className="Form-newRecipe" method="" onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        name="title"
                        type="text"
                    />
                    </li>
                    <li>
                    <label htmlFor="serving">Serving</label>
                    <input
                        id="serving"
                        onChange={this.handleChange}
                        value={this.state.serving}
                        name="serving"
                        type="text"
                    />
                    </li>
                    <li>
                    <label htmlFor="level">Level</label>
                    <select onChange={this.handleChange} value={this.state.level} name="level" id="level">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Difficult">Difficult</option>
                    </select> 
                    </li>
                    <li>
                    <label htmlFor="duration">Duration</label>
                    <input
                        id="duration"
                        onChange={this.handleChange}
                        name="duration"
                        type="number"
                        value={this.state.duration}
                    /> 
                    </li>
                    <li>
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
                    </li>
                    <li>
                    <label htmlFor="">instructions</label>
                    <input className="input_instructions"
                        onChange={this.handleChange}
                        name="instructions"
                        type="text"
                        value={this.state.instructions}
                    />
                    </li>
                    <li>
                    <label htmlFor="">Creator</label>
                    <input
                        onChange={this.handleChange}
                        name="creator"
                        type="text"
                        value={this.state.creator}
                    />
                    </li>
                    <li>
                    <label htmlFor="">type</label>
                    <input
                        onChange={this.handleChange}
                        name="type"
                        type="text"
                        value={this.state.type}
                    />
                    </li>
                    <li>
                        <button className="btn">Submit</button>
                    </li>
                </ul>
            </form>
            </div>
        );
    }
}

export default FormCreateRecipe;
