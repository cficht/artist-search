import React from 'react';
import PropTypes from 'prop-types';

const Release = ({ artistName, recordings }) => {
  const recordingNodes = recordings.map(recording => (
    <li key={recording.id}>
      {recording.title}
    </li>
  ));

  return (
    <section>
      <h2>{artistName}</h2>
      <ul>
        {recordingNodes}
      </ul>
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
