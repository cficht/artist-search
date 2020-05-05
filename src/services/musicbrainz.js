export const fetchArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&offset=${page}`)
    .then(res => res.json())
    .then(res => res.artists.map(({ id, name }) => ({
      id,
      name
    })));
};

export const fetchReleases = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(artist => artist.releases.map(({ id, title }) => ({
      id,
      title
    })));
};
