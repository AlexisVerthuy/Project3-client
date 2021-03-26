import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./../styles/global.css"

class Home extends React.Component {
    state = {
        recipes: [],
    };
    componentDidMount() {
      axios
        .get("http://localhost:4000/api/recipe")
        .then((response) => {
          this.setState({ recipes: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }

    render() {

      return (
        <div>

          <div>
          <h1>My food diary</h1>
          <img className="image-home" src="/images/homeBandeau.jpg" alt="Bandeau"/>
          </div>

          <div className = "cards">
          {this.state.recipes.map((recipe) => (
            <div key={recipe._id}>
              <p className = "card-title">{recipe.title}</p>
              <img className= "image-card" src={recipe.picture} alt="" />
              <Link to={`/recipe/${recipe._id}`}>See more !</Link>
            </div>
          ))}
          </div>

        </div>
      );
    }
  }
  
  export default Home;
  