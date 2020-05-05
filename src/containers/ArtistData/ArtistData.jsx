import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Artist from '../../components/Artist/Artist';
import Paging from '../../components/Paging/Paging';
import { fetchReleases } from '../../services/musicbrainz';

const ArtistData = () => {
  const [releases, setReleases] = useState([]);
  const [page, setPage] = useState(0);

  let { artistId } = useParams();

  useEffect(() => {
    fetchReleases(artistId, 0)
      .then(releases => setReleases(releases));
  }, []);

  // REFACTOR
  const handlePage = (val) => {
    setPage(page + val);
    fetchReleases(artistId, (page + val) * 25)
      .then(releases => setReleases(releases));
  };

  return (
    <>
      <Artist releases={releases} />
      <Paging page={page} list={releases} handlePage={handlePage}/>
    </>
  );
};

export default ArtistData;
