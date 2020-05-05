import React from 'react';
import PropTypes from 'prop-types';

const Recording = ({ artist, recording, lyrics }) => (
  <>
    <h1>{artist}</h1>
    <h2>{recording}</h2>
    <p>{lyrics}</p>
  </>
);

Recording.propTypes = {
  artist: PropTypes.string.isRequired,
  recording: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Recording;
