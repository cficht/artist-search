export const fetchLyrics = (artist, recording) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${recording}`)
    .then(res => res.json());
};
