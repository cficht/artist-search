import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Paging from '../../components/Paging/Paging';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz';

const SearchData = () => {
  const [artistText, setArtistText] = useState('');
  
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(0);
  let { search, pageNum } = useParams();
  let history = useHistory();

  // SEARCH PAGE SPECIFIC

  useEffect(() => {
    if(search){
      setPage(Number(pageNum));
      fetchArtists(search, pageNum)
        .then(artists => setArtists(artists));
    }
  }, []);

  useEffect(() => {
    setArtistText(search);
  }, [artistText]);

  const handleChange = ({ target }) => {
    setArtistText(target.value);
    history.push(`/${target.value}`);
  };

  const handleSubmit = () => {
    event.preventDefault();
    setPage(0);
    fetchArtists(artistText, 0)
      .then(artists => setArtists(artists));
    history.push(`${artistText}/0`);
  };

  // REFACTOR FOR REUSE

  useEffect(() => {
    setPage(Number(pageNum));
    fetchArtists(artistText, pageNum)
      .then(artists => setArtists(artists));
  }, [pageNum]);

  const handlePage = (val) => {
    setPage(page + val);
    fetchArtists(artistText, (page + val))
      .then(artists => setArtists(artists));
    pageNum = (page + val);
    history.push(`${pageNum}`);
  };

  return (
    <>
      <Search artistText={artistText} artists={artists} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Paging page={page} list={artists} handlePage={handlePage}/>
    </>
  );
};

export default SearchData;
