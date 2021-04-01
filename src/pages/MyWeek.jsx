import React from "react";

class MyWeek extends React.Component {
  // state = {
  //  weekMeal : null,
  // };

  // componentDidMount() {

  //   // console.log("this is the id", this.props.match.params);

  //   axios
  //     .get(`http://localhost:4000/api/myweek`)
  //     .then((response) => {
  //       //console.log("this is my set.state", this.setState);
  //       this.setState({ weekMeal: response.data });
  //       //console.log("this is my recipe", response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div>
        <h1>My week plan!</h1>

        <div></div>
      </div>
    );
  }
}

export default MyWeek;
