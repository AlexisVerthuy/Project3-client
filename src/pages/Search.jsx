import React from "react";

const Search = (props) => {
  const { searchValue, handleSearch } = props;
  //console.log("this is props", props);

  return (
    <>
      <label htmlFor=" searchValue">Search recipe</label>
      <input
        className="input"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={(event) => handleSearch(event, event.target.value)}
      />
      {/* <button type="submit">Search</button> */}
    </>
  );
};

export default Search;
