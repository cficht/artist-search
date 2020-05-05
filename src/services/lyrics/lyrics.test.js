/* eslint-disable no-undef */
import { fetchLyrics } from './lyrics';

describe('fetchLyrics service', () => {
  it('uses fetch to get lyrics', () => {
    global.fetch = () => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ 'lyrics':'Last night I said these words to my girl\r\nI know you never even try girl\r\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\r\n\nPlease please me, whoa yeah, like I please you\r\nYou don\'t need me to show the way, love\n\nWhy do I always have to say, love\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease please me, whoa yeah, like I please you?\n\n\n\nI don\'t want to sound complaining\n\nBut you know there\'s always rain in my heart (in my heart)\n\nI do all the pleasing with you it\'s so hard to reason\n\nWith you, whoa yeah, why do you make me blue?\n\nLast night I said these words to my girl\n\nI know you never even try girl\n\n\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease, please me, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you' })
    });

    const lyrics = { 'lyrics':'Last night I said these words to my girl\r\nI know you never even try girl\r\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\r\n\nPlease please me, whoa yeah, like I please you\r\nYou don\'t need me to show the way, love\n\nWhy do I always have to say, love\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease please me, whoa yeah, like I please you?\n\n\n\nI don\'t want to sound complaining\n\nBut you know there\'s always rain in my heart (in my heart)\n\nI do all the pleasing with you it\'s so hard to reason\n\nWith you, whoa yeah, why do you make me blue?\n\nLast night I said these words to my girl\n\nI know you never even try girl\n\n\n\nCome on (Come on) Come on (Come on) Come on (Come on) Come on (Come on)\n\nPlease, please me, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you\n\nMe, whoa yeah, like I please you' };

    return fetchLyrics('The Beatles', 'Please Please Me')
      .then(res => {
        expect(res).toEqual(lyrics);
      });
  });
});
