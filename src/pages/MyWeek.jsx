import React from "react";
import axios from "axios";
import { withUser } from "../components/Auth/withUser";
import "./../styles/global.css";

class MyWeek extends React.Component {
  state = {
    weekMeal: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/user/myweek`, { withCredentials: true })
      .then((response) => {
        console.log("this is my response", response);
        this.setState({ weekMeal: response.data });
        //console.log(response.data);
        //console.log(
        // "this is weekmeal state",
        // this.state.weekMeal.weekMeal.monday
        // );
        //console.log("this is my response.data", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.weekMeal === null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>My week plan!</h1>
        {/* {this.state.weekMeal.weekMeal.monday} */}
        {/* {this.state.weekMeal.weekMeal.monday} */}
        {/* {this.state.weekMeal.weekMeal.map((element) => {
          <p>{element}</p>;
        })} */}
        <div>
          <div className="weekMeal">
            <h3>👩🏽‍🍳 Monday</h3>
            {this.state.weekMeal.weekMeal.monday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>

          <div className="weekMeal">
            <h3>👩🏽‍🍳 Tuesday</h3>
            {this.state.weekMeal.weekMeal.tuesday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
          <div className="weekMeal">
            <h3>👩🏽‍🍳 Wednesday</h3>
            {this.state.weekMeal.weekMeal.wednesday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
          <div className="weekMeal">
            <h3>👩🏽‍🍳 Thursday</h3>
            {this.state.weekMeal.weekMeal.thursday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
          <div className="weekMeal">
            <h3>👩🏽‍🍳 Friday</h3>
            {this.state.weekMeal.weekMeal.friday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
          <div className="weekMeal">
            <h3>👩🏽‍🍳 Saturday</h3>
            {this.state.weekMeal.weekMeal.saturday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <p>{meal.title}</p>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
          <div className="weekMeal">
            <h3> 👩🏽‍🍳 Sunday</h3>
            {this.state.weekMeal.weekMeal.sunday.map((meal) => (
              <div key={meal._id}>
                <b>
                  <b>
                    <p>{meal.title}</p>
                  </b>
                </b>
                <img className="imageWeekMeal" src={meal.picture} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withUser(MyWeek);
