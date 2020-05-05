import React, { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import { fetchArtists } from '../../services/musicbrainz';
import { useParams, useHistory } from 'react-router-dom';

const SearchData = () => {
  const [artistText, setArtistText] = useState('');
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(0);

  let { search } = useParams();
  let history = useHistory();

  useEffect(() => {
    if(search){
      fetchArtists(search, 0)
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
  };

  const handlePage = (val) => {
    setPage(page + val);
    fetchArtists(artistText, (page + val) * 25)
      .then(artists => setArtists(artists));
  };

  return (
    <>
      <Search artistText={artistText} artists={artists} page={page} handleChange={handleChange} handleSubmit={handleSubmit} handlePage={handlePage}/>
    </>
  );
};

export default SearchData;
