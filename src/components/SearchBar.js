import React from 'react';

const SearchBar = ({ style = {}, _ref, action }) => {
  const handleKeyPress = e => e.key === 'Enter' && action();

  return <div className="ui card fluid" style={style}>
    <div className="content">
      <h5 className="ui header">Search by Email</h5>
      <div className="ui icon input fluid">
        <input type="text" placeholder="Email to search..." ref={_ref} onKeyPress={handleKeyPress}/>
        <i className="search icon"></i>
      </div>
    </div>
  </div>;
}

export default SearchBar;
