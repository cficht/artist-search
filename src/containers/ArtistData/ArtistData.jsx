import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Artist from '../../components/Artist/Artist';
import Paging from '../../components/Paging/Paging';
import { fetchReleases } from '../../services/musicbrainz/musicbrainz';

const ArtistData = () => {

  const [releases, setReleases] = useState([]);
  const [page, setPage] = useState(0);
  
  let { artistName, artistId, pageNum } = useParams();
  let history = useHistory();

  // REFACTOR FOR REUSE

  useEffect(() => {
    if(pageNum) {
      setPage(Number(pageNum));
      fetchReleases(artistId, pageNum)
        .then(releases => setReleases(releases));
    }
  }, [pageNum]);

  const handlePage = (val) => {
    setPage(page + val);
    pageNum = (page + val);
    history.push(`${pageNum}`);
  };

  return (
    <>
      <Artist artistName={artistName} releases={releases} />
      <Paging page={page} list={releases} handlePage={handlePage}/>
    </>
  );
};

export default ArtistData;
