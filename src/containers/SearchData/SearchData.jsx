import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Paging from '../../components/Paging/Paging';
import { fetchArtists } from '../../services/musicbrainz/musicbrainz';

const SearchData = () => {
  const [artistText, setArtistText] = useState(''); 
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(0);
  let { search, pageNum } = useParams();
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if(search) setPage(Number(pageNum));
  }, []);

  useEffect(() => {
    if(location.pathname === '/') { 
      setArtistText('');
      setArtists([]);
      setPage(0);
    }
  }, [location]);

  useEffect(() => {
    setArtistText(search);
  }, [artistText]);

  const handleChange = ({ target }) => {
    setArtistText(target.value);
    history.push(`/${target.value}`);
  };

  const handleSubmit = () => {
    event.preventDefault();
    if(location.pathname === `/${artistText}/${pageNum}`) history.push('/');
    setPage(0);
    history.push(`${artistText}/0`);
  };

  useEffect(() => {
    if(pageNum) {
      setPage(Number(pageNum));
      fetchArtists(search, pageNum)
        .then(artists => setArtists(artists));
    }
  }, [pageNum]);

  const handlePage = (val) => {
    setPage(page + val);
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
