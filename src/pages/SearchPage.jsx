// import React from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./../styles/global.css";
// import Search from "../components/Search";
// import OneRecipe from "./OneRecipe";

// class SearchPage extends React.Component {
//   state = {
//     searchValue: "",
//   };
//   componentDidMount() {
//     axios
//       .get("http://localhost:4000/api/recipe")
//       .then((response) => {
//         this.setState({ recipes: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   handleSearch = (_, value) => {
//     this.setState({ searchValue: value });
//   };

//   render() {
//     return (
//       <div>
//         <Search
//           handleSearch={this.handleSearch}
//           searchValue={this.state.searchValue}
//         />
//         <div className="column">
//           {this.state.recipes
//             .filter((recipe) =>
//               recipe.name
//                 .toLowerCase()
//                 .includes(this.state.searchValue.toLowerCase())
//             )
//             .map((recipe, index) => {
//               return <OneRecipe key={index} recipe={recipe} />;
//             })}
//         </div>
//       </div>
//     );
//   }
// }

// export default SearchPage;
