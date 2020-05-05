import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Search = ({ artistText, artists, handleChange, handleSubmit }) => {
  const artistNodes = artists.map(artist => (
    <li key={artist.id}>
      <Link to={`/artist/${artist.name}/${artist.id}/0`}>{artist.name}</Link>
    </li>
  ));

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={artistText || ''} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <ul>
          {artistNodes}
        </ul>
      </section>
    </>
  );
};

Search.propTypes = {
  artistText: PropTypes.string,
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Search;
