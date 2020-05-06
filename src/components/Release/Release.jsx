import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Release.css';

const Release = ({ artistName, recordings }) => {
  const recordingNodes = recordings.map(recording => (
    <li key={recording.id}>
      <Link to={`/recording/${artistName}/${recording.title}`}>{recording.title}</Link>
    </li>
  ));

  return (
    <section className={styles.Release}>
      <h2>{artistName}</h2>
      <article className={styles.List}>
        <ul>
          {recordingNodes}
        </ul>
      </article>
    </section>
  );
};

Release.propTypes = {
  artistName: PropTypes.string.isRequired,
  recordings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Release;
