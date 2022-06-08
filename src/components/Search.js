import React, { useState } from "react";

function Search({ search, onSearch }) {
  const [toSearch, setToSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(toSearch);
  }

  function handleChange(e) {
    setToSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={toSearch}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
