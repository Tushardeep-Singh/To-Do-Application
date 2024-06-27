// Author: Tushardeep Singh

// Import statements
import { Fragment } from "react";
import "./searchItems.css";

export const SearchItems = ({ handleSearch }) => {
  return (
    <Fragment>
      <form className="searchForm" name="searchform">
        <label className="searchForm-label">
          search:
          <input
            id="searchForm"
            type="text"
            onChange={(e) => handleSearch(e)}
            className="searchForm-input"
            placeholder="search item"
          />
        </label>
      </form>
    </Fragment>
  );
};
