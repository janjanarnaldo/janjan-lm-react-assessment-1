import React from 'react';

const SearchBar = ({ style = {} }) => {
  return <div className="ui card fluid" style={style}>
    <div class="content">
      <h5 class="ui header">Search by Email</h5>
      <div className="ui icon input fluid">
        <input type="text" placeholder="Email to search..." />
        <i className="search icon"></i>
      </div>
    </div>
  </div>;
}

export default SearchBar;
