import React from 'react';
import PropTypes from 'prop-types';
import styles from './Recording.css';

const Recording = ({ artist, recording, lyrics }) => (
  <section className={styles.Recording}>
    <h1>{`${artist} - ${recording}`}</h1>
    <pre>
      <p>{lyrics}</p>
    </pre>
  </section>
);

Recording.propTypes = {
  artist: PropTypes.string.isRequired,
  recording: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Recording;
