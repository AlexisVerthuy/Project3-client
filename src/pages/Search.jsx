import React from "react";
import "./../styles/global.css"

const Search = (props) => {
  const { searchValue, handleSearch } = props;
  //console.log("this is props", props);

  return (
    <div className="search-b">
      <label className="label" htmlFor=" searchValue">Recipes</label>
      <input
        className="input"
        type="text"
        placeholder="What are you looking for?"
        value={searchValue}
        onChange={(event) => handleSearch(event, event.target.value)}
      />
      {/* <button type="submit">Search</button> */}
    </div>
  );
};

export default Search;
