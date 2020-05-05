import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Search = ({ artistText, artists, page, handleChange, handleSubmit, handlePage }) => {
  const artistNodes = artists.map(artist => (<li key={artist.id}><Link to={`/artist/${artist.id}`} artistName={artist.name}>{artist.name}</Link></li>));
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={artistText || ''} onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {artistNodes}
      </ul>
      <button onClick={() => handlePage(-1)} disabled={page === 0}>Back</button>
      <button onClick={() => handlePage(1)} disabled={artists.length < 25}>Forward</button>
    </>
  );
};

Search.propTypes = {
  artistText: PropTypes.string,
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  page: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired
};

export default Search;
