export const fetchArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&offset=${page}`)
    .then(res => res.json())
    .then(artist => artist.artists.map(({ id, name }) => ({
      id,
      name
    })));
};
