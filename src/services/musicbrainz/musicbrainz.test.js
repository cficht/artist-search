/* eslint-disable no-undef */
import { fetchArtists, fetchRecordings } from './musicbrainz';

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
});

// CANNOT MAKE THIS WORK
// describe('fetchReleases service', () => {
//   it('uses fetch to get releases from an artist', () => {
//     global.fetch = () => Promise.resolve({
//       json: () => Promise.resolve({ 
//         releases: [
//           {
//             id: '02f72e2a-e474-40de-94bf-1538c5c5ed80',
//             title: 'Complete Control',
//             art: true
//           },
//           {
//             id: '1c7f9bdc-0fc9-4b88-b4bb-b08985842f73',
//             title: 'Give ’Em Enough Rope',
//             art: true
//           }
//         ] })
//     });
  
//     return fetchReleases()
//       .then(res => {
//         expect(res).toEqual([
//           {
//             id: '02f72e2a-e474-40de-94bf-1538c5c5ed80',
//             title: 'Complete Control',
//             art: true
//           },
//           {
//             id: '1c7f9bdc-0fc9-4b88-b4bb-b08985842f73',
//             title: 'Give ’Em Enough Rope',
//             art: true             
//           }
//         ]);
//       });
//   });
// });

describe('fetchRecordings service', () => {
  it('uses fetch to get recordings', () => {
    global.fetch = () => Promise.resolve({
      json: () => Promise.resolve({ 
        recordings: [
          {
            id: '04532aae-d0cb-403c-8e09-7ea1716a124c',
            title: 'Ask Me Why'
          },
          {
            id: '14c4b37f-8a93-4dc3-bc23-2ed86cdb20bb',
            title: 'There’s a Place'
          },
          {
            title: 'Love Me Do',
            id: '1f518811-7cf9-4bdc-a656-0958e130f312'
          }
        ] })
    });

    return fetchRecordings('id')
      .then(res => {
        expect(res).toEqual([
          {
            id: '04532aae-d0cb-403c-8e09-7ea1716a124c',
            title: 'Ask Me Why'
          },
          {
            id: '14c4b37f-8a93-4dc3-bc23-2ed86cdb20bb',
            title: 'There’s a Place'
          },
          {
            id: '1f518811-7cf9-4bdc-a656-0958e130f312',
            title: 'Love Me Do'
          }
        ]);
      });
  });
});
