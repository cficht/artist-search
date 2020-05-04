export const fetchArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(artist => artist.artists.map(({ id, name }) => ({
      id,
      name
    })));
};
