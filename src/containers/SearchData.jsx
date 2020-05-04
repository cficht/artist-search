import React, { useState } from 'react';
import Search from '../components/Search/Search';
import { fetchArtists } from '../services/musicbrainz';

const SearchData = () => {
  const [artistText, setArtistText] = useState('');
  const [artists, setArtists] = useState([]);

  const handleChange = ({ target }) => {
    setArtistText(target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetchArtists(artistText)
      .then(artists => setArtists(artists));
  };

  return (
    <>
      <Search artistText={artistText} artists={artists} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  );
};

export default SearchData;
