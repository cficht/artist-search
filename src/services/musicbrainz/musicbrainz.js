import placeholder from '../../assets/placeholder.jpg';

export const fetchArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&offset=${page * 25}`)
    .then(res => res.json())
    .then(res => 
      res.artists.map(artist => ({
        id: artist.id,
        name: artist.name
      })));
};

export const fetchReleases = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&offset=${page * 25}`)
    .then(res => res.json())
    .then(res => 
      res.releases.map(release => ({
        id: release.id,
        title: release.title,
        art: release['cover-art-archive'].front ? `http://coverartarchive.org/release/${release.id}/front` : placeholder
      })));
};
