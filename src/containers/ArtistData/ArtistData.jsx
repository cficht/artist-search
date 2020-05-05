import React, { useState, useEffect } from 'react';
import Artist from '../../components/Artist/Artist';
import { useParams } from 'react-router-dom';
import { fetchReleases } from '../../services/musicbrainz';

const ArtistData = () => {
  const [releases, setReleases] = useState([]);
  let { artistId } = useParams();

  useEffect(() => {
    fetchReleases(artistId)
      .then(releases => setReleases(releases));
  }, []);

  return (
    <>
      <Artist releases={releases} />
    </>
  );
};

export default ArtistData;
