import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Recording from '../../components/Recording/Recording';
import { fetchLyrics } from '../../services/lyrics/lyrics';

const RecordingData = () => {
  const [lyrics, setLyrics] = useState('');
  let { artistName, recordingName } = useParams();

  useEffect(() => {
    fetchLyrics(artistName, recordingName)
      .then(lyrics => setLyrics(lyrics))
      .catch(error => setLyrics({ lyrics: error }));
  }, []);

  return (
    <>
      <Recording artist={artistName} recording={recordingName} lyrics={lyrics.lyrics}/>
    </>
  );
};

export default RecordingData;
