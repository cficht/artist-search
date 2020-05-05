import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ releases }) => {
  const releaseNodes = releases.map(release => (
    <li key={release.id}>
      <img src={`http://coverartarchive.org/release/${release.id}/front`} />
      <h3>{release.title}</h3>
    </li>  
  ));
  return (
    <>
      <ul>
        {releaseNodes}
      </ul>
    </>
  );
};

Artist.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Artist;
