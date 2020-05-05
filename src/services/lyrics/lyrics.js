export const fetchLyrics = (artist, recording) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${recording}`)
    .then(res => {
      if(!res.ok) throw 'No lyrics found';
      return res.json();
    });
};
