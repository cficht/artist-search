import React from 'react';
import Recording from '../Recording/Recording';

const artist = 'The Beatles';
const artistId = 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d';

const release = 'Please Please Me / Ask My Why';
const releaseId = '08a76e48-4d6a-3d9f-a25b-5d96166a05ae';

const recording = 'Please Please Me';
const recordingId = '875c1cf7-f568-4f0d-b5e3-bc8a7614269a';

const lyrics = { 'lyrics':'Last night I said these words to my girl\r\nI know you never even try girl\r\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\r\n\nPlease please me, whoa yeah, like I please you\r\nYou don\'t need me to show the way, love\n\nWhy do I always have to say, love\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease please me, whoa yeah, like I please you?\n\n\n\nI don\'t want to sound complaining\n\nBut you know there\'s always rain in my heart (in my heart)\n\nI do all the pleasing with you it\'s so hard to reason\n\nWith you, whoa yeah, why do you make me blue?\n\nLast night I said these words to my girl\n\nI know you never even try girl\n\n\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease, please me, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you' };

export default function App() {
  return <Recording artist={artist} recording={recording} lyrics={lyrics.lyrics}/>;
}
