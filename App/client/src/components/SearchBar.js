import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DEV_URL = "http://localhost:8000/";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const url_param = "?searchterm=" + term;
      const response = await axios.get(
        DEV_URL + "api/protest/search" + url_param
      );
      const searchData = response.data.slice(0, 10);
      onSubmit(searchData); // Call the onSubmit callback with the search results
      setTerm("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>
          <input placeholder="Search" value={term} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
