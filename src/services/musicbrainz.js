export const fetchArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&offset=${page}`)
    .then(res => res.json())
    .then(res => res.artists.map(({ id, name }) => ({
      id,
      name
    })));
};

export const fetchReleases = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&offset=${page}`)
    .then(res => res.json())
    .then(artist => {
      const artistReleases = artist.releases.map(release => ({
        id: release.id,
        title: release.title,
        art: release['cover-art-archive'].artwork
      }));
      return artistReleases;
    });
};
