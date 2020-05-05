import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const Artist = ({ releases }) => {
  const releaseNodes = releases.map(release => (
    <li key={release.id}>
      <img src={release.art ? `http://coverartarchive.org/release/${release.id}/front` : 'https://i2.wp.com/www.wmhbradio.org/wp-content/uploads/2016/07/albumcover-placeholder.jpg'} />
      <h3>{release.title}</h3>
    </li>  
  ));
  return (
    <div className={styles.Artist}>
      <ul>
        {releaseNodes}
      </ul>
    </div>
  );
};

Artist.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })).isRequired
};

export default Artist;
