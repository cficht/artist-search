import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Release from '../../components/Release/Release';
import { fetchRecordings } from '../../services/musicbrainz/musicbrainz';

const ReleaseData = () => {
  const [recordings, setRecordings] = useState([]);
  let { artistName, releaseId } = useParams();

  useEffect(() => {
    fetchRecordings(releaseId)
      .then(recordings => setRecordings(recordings));
  }, []);

  return (
    <>
      <Release artistName={artistName} recordings={recordings}/>
    </>
  );
};

export default ReleaseData;
