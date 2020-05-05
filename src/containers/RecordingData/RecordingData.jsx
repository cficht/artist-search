import React, { useState, useEffect } from 'react';
import Recording from '../../components/Recording/Recording';
import { fetchLyrics } from '../../services/lyrics';

const RecordingData = () => {
  const artist = 'The Beatles';
  // const artistId = 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d';

  // const release = 'Please Please Me / Ask My Why';
  // const releaseId = '08a76e48-4d6a-3d9f-a25b-5d96166a05ae';

  const recording = 'Please Please Me';
  // const recordingId = '875c1cf7-f568-4f0d-b5e3-bc8a7614269a';


  // const [artist, setArtist] = useState('The Beatles');
  // const [recording, setRecording] = useState('Please Please Me');
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetchLyrics(artist, recording)
      .then(lyrics => setLyrics(lyrics));
  }, []);

  return (
    <>
      <Recording artist={artist} recording={recording} lyrics={lyrics.lyrics}/>
    </>
  );
};

export default RecordingData;
