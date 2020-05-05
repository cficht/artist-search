/* eslint-disable no-undef */
import { fetchArtists, fetchReleases } from './musicbrainz';

describe('fetchArtists service', () => {
  it('uses fetch to get artists', () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({ 
        artists: [
          {
            id: 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
            name: 'The Beatles'
          },
          {
            id: 'db855eff-9d28-4bd7-ab2c-7301495b4669',
            name: 'THE ALFEE'
          }
        ] })
    });

    return fetchArtists('The')
      .then(res => {
        expect(res).toEqual([
          {
            id: 'b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d',
            name: 'The Beatles'
          },
          {
            id: 'db855eff-9d28-4bd7-ab2c-7301495b4669',
            name: 'THE ALFEE'
          }
        ]);
      });
  });

  describe('fetchReleases service', () => {
    it('uses fetch to get releases from an artist', () => {
      global.fetch = () => Promise.resolve({
        json: () => Promise.resolve({ 
          releases: [
            {
              id: '02f72e2a-e474-40de-94bf-1538c5c5ed80',
              title: 'Complete Control'
            },
            {
              id: '1c7f9bdc-0fc9-4b88-b4bb-b08985842f73',
              title: 'Give ’Em Enough Rope'
            }
          ] })
      });
  
      return fetchReleases('asdsadsds')
        .then(res => {
          expect(res).toEqual([
            {
              id: '02f72e2a-e474-40de-94bf-1538c5c5ed80',
              title: 'Complete Control'
            },
            {
              id: '1c7f9bdc-0fc9-4b88-b4bb-b08985842f73',
              title: 'Give ’Em Enough Rope'
            }
          ]);
        });
    });
  });
});
