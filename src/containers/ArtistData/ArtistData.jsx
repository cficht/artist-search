import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Artist from '../../components/Artist/Artist';
import Paging from '../../components/Paging/Paging';
import { fetchReleases } from '../../services/musicbrainz';

const ArtistData = () => {
  const [releases, setReleases] = useState([]);
  const [page, setPage] = useState(0);

  let { artistId, pageNum } = useParams();
  let history = useHistory();

  useEffect(() => {
    setPage(Number(pageNum));
    fetchReleases(artistId, pageNum * 25)
      .then(releases => setReleases(releases));
  }, [pageNum]);

  // REFACTOR
  const handlePage = (val) => {
    setPage(page + val);
    fetchReleases(artistId, (page + val) * 25)
      .then(releases => setReleases(releases));
    pageNum = (page + val);
    history.push(`${pageNum}`);
  };

  return (
    <>
      <Artist releases={releases} />
      <Paging page={page} list={releases} handlePage={handlePage}/>
    </>
  );
};

export default ArtistData;
