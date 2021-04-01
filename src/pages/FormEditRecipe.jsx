import axios from "axios";
import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import FormInsertNewIngredient from '../components/FormInsertNewIngredient';

class FormEditRecipe extends React.Component {
    state = {
        title: "",
        serving: 0,
        level: "",
        duration: "",
        ingredients: [{
            quantity: 0,
            unit: "",
            value: "",
        }],
        instructions: "",
        creator: "",
        type: "",
    };


    componentDidMount() {
        console.log(this.props);

        const id = this.props.match.params._id;

        axios
            .get(`http://localhost:4000/api/recipe/${id}`)
            .then((response) => {
                const data = response.data;
                console.log(data)
                this.setState({
                    title: data.title,
                    serving: data.serving,
                    level: data.level,
                    duration: data.duration,
                    ingredients: data.ingredients,
                    instructions: data.instructions,
                    creator: data.creator,
                    type: data.type,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const id = this.props.match.params._id;
        console.log(this.props.match)
        axios
            .patch(`http://localhost:4000/api/recipe/edit/${id}`, {
                title: this.state.title,
                serving: this.state.serving,
                level: this.state.level,
                duration: this.state.duration,
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

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleIngredientChange = (event) => {

        const newIngredient = this.state.ingredients
        newIngredient[event.target.id][event.target.name] = event.target.value
        console.log(event.target)
        this.setState({ ingredients: newIngredient });
    }

    AddNewIngredient = (ingredient) => {
        console.log(ingredient)
        this.setState({ ingredients: [...this.state.ingredients, ingredient] })
    }

    render() {
        return (
            <div>
                <h1>Edit your {this.state.title} recipe !</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.title}
                            name="title"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="serving">Serving</label>
                        <input
                            onChange={this.handleChange}
                            value={this.state.serving}
                            name="serving"
                            type="number"
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
                        <label htmlFor="">Duration</label>
                        <input
                            onChange={this.handleChange}
                            name="duration"
                            type="number"
                            value={this.state.duration}
                        />
                    </div>
                    <p>Ingredients:</p>
                    {this.state.ingredients.map((ingredient, index) => (
                        <div key={ingredient._id}>
                            
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <input
                                    id={index}
                                    onChange={this.handleIngredientChange}
                                    name="quantity"
                                    type="number"
                                    value={this.state.ingredients[index].quantity}
                                />
                            </div>
                            <div>
                                <label htmlFor="unit">Unit</label>
                                <input
                                    id={index}
                                    onChange={this.handleIngredientChange}
                                    name="unit"
                                    type="text"
                                    value={this.state.ingredients[index].unit}
                                />
                            </div>
                            <div>
                                <label htmlFor="value">Value</label>
                                <input
                                    id={index}
                                    onChange={this.handleIngredientChange}
                                    name="value"
                                    type="text"
                                    value={this.state.ingredients[index].value}
                                />
                            </div>
                        </div>
                    ))}
                    <FormInsertNewIngredient  handleClick={this.AddNewIngredient}/>
                    <div>
                        <label htmlFor="instructions">instructions</label>
                        <input className="input_instructions"
                            onChange={this.handleChange}
                            name="instructions"
                            type="text"
                            value={this.state.instructions}
                        />
                    </div>
                    <div>
                        <label htmlFor="creator">Creator</label>
                        <input
                            onChange={this.handleChange}
                            name="creator"
                            type="text"
                            value={this.state.creator}
                        />
                    </div>
                    <div>
                        <label htmlFor="type">type</label>
                        <input
                            onChange={this.handleChange}
                            name="type"
                            type="text"
                            value={this.state.type}
                        />
                    </div>
                    <button>Submit</button>
                </form>
                <Link to={`/recipe/${this.props.match.params._id}`}><button>Nothing to edit</button></Link>
            </div>
        );
    }
}

export default FormEditRecipe;
