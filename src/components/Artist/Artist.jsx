import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const Artist = ({ artistName, releases }) => {
  const releaseNodes = releases.map(release => (
    <li key={release.id}> 
      <img src={release.art} />
      <h3>{release.title}</h3>
    </li>  
  ));

  return (
    <section className={styles.Artist}>
      <h2>{artistName}</h2>
      <ul>
        {releaseNodes}
      </ul>
    </section>
  );
};

Artist.propTypes = {
  artistName: PropTypes.string.isRequired,
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Artist;
