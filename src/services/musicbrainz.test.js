/* eslint-disable no-undef */
import { fetchArtists } from './musicbrainz';

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
          },
          {
            id: 'b071f9fa-14b0-4217-8e97-eb41da73f598',
            name: 'The Rolling Stones'
          },
          {
            id: '69ee3720-a7cb-4402-b48d-a02c366f2bcf',
            name: 'The Cure'
          },
          {
            id: '9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa',
            name: 'The Who'
          },
          {
            id: 'd6652e7b-33fe-49ef-8336-4c863b4f996f',
            name: 'The E Street Band'
          },
          {
            id: '8d4c13de-6e61-4a8e-ac4d-d0e1996bcef8',
            name: 'the GazettE'
          },
          {
            id: '17b53d9f-5c63-4a09-a593-dde4608e0db9',
            name: 'The Kinks'
          },
          {
            id: '70248960-cb53-4ea4-943a-edb18f7d336f',
            name: 'Bruce Springsteen'
          },
          {
            id: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9',
            name: 'The Weeknd'
          },
          {
            id: '9efff43b-3b29-4082-824e-bc82f646f93d',
            name: 'The Doors'
          },
          {
            id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
            name: 'U2'
          },
          {
            id: 'ebfc1398-8d96-47e3-82c3-f782abcdb13d',
            name: 'The Beach Boys'
          },
          {
            id: 'be407b02-f3e6-4ed5-9489-f8e5f0ab36dc',
            name: 'The Raconteurs'
          },
          {
            id: 'd85e95a3-07c7-4c04-a411-234290615113',
            name: 'The Mission'
          },
          {
            id: 'ba0d6274-db14-4ef5-b28d-657ebde1a396',
            name: 'The Smashing Pumpkins'
          },
          {
            id: 'c1aa2ec9-53e7-4d90-8d36-bac75832e986',
            name: 'The Supremes'
          },
          {
            id: 'c7cf4584-bfb1-4cf5-be41-aef384310bbb',
            name: 'The Shadows'
          },
          {
            id: 'd6ed7887-a401-47a8-893c-34b967444d26',
            name: 'Ramones'
          },
          {
            id: 'b2cc8903-0077-4bef-8454-ac5cef53d126',
            name: 'The Ventures'
          },
          {
            id: 'd4305549-6b4e-4a57-b24d-8af0743fe191',
            name: 'The Hollies'
          },
          {
            id: 'a55c2f1b-3f3f-4d6a-aa30-5e186dbadce6',
            name: 'Suede'
          },
          {
            id: '8434409e-baa9-4e12-b4aa-566a91c7d7cf',
            name: 'The Charlatans'
          },
          {
            id: '8c9b336e-acc8-4e20-9195-6ed0634da9fc',
            name: 'The Residents'
          },
          {
            id: '8f92558c-2baa-4758-8c38-615519e9deda',
            name: 'The Clash'
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
          },
          {
            id: 'b071f9fa-14b0-4217-8e97-eb41da73f598',
            name: 'The Rolling Stones'
          },
          {
            id: '69ee3720-a7cb-4402-b48d-a02c366f2bcf',
            name: 'The Cure'
          },
          {
            id: '9fdaa16b-a6c4-4831-b87c-bc9ca8ce7eaa',
            name: 'The Who'
          },
          {
            id: 'd6652e7b-33fe-49ef-8336-4c863b4f996f',
            name: 'The E Street Band'
          },
          {
            id: '8d4c13de-6e61-4a8e-ac4d-d0e1996bcef8',
            name: 'the GazettE'
          },
          {
            id: '17b53d9f-5c63-4a09-a593-dde4608e0db9',
            name: 'The Kinks'
          },
          {
            id: '70248960-cb53-4ea4-943a-edb18f7d336f',
            name: 'Bruce Springsteen'
          },
          {
            id: 'c8b03190-306c-4120-bb0b-6f2ebfc06ea9',
            name: 'The Weeknd'
          },
          {
            id: '9efff43b-3b29-4082-824e-bc82f646f93d',
            name: 'The Doors'
          },
          {
            id: 'a3cb23fc-acd3-4ce0-8f36-1e5aa6a18432',
            name: 'U2'
          },
          {
            id: 'ebfc1398-8d96-47e3-82c3-f782abcdb13d',
            name: 'The Beach Boys'
          },
          {
            id: 'be407b02-f3e6-4ed5-9489-f8e5f0ab36dc',
            name: 'The Raconteurs'
          },
          {
            id: 'd85e95a3-07c7-4c04-a411-234290615113',
            name: 'The Mission'
          },
          {
            id: 'ba0d6274-db14-4ef5-b28d-657ebde1a396',
            name: 'The Smashing Pumpkins'
          },
          {
            id: 'c1aa2ec9-53e7-4d90-8d36-bac75832e986',
            name: 'The Supremes'
          },
          {
            id: 'c7cf4584-bfb1-4cf5-be41-aef384310bbb',
            name: 'The Shadows'
          },
          {
            id: 'd6ed7887-a401-47a8-893c-34b967444d26',
            name: 'Ramones'
          },
          {
            id: 'b2cc8903-0077-4bef-8454-ac5cef53d126',
            name: 'The Ventures'
          },
          {
            id: 'd4305549-6b4e-4a57-b24d-8af0743fe191',
            name: 'The Hollies'
          },
          {
            id: 'a55c2f1b-3f3f-4d6a-aa30-5e186dbadce6',
            name: 'Suede'
          },
          {
            id: '8434409e-baa9-4e12-b4aa-566a91c7d7cf',
            name: 'The Charlatans'
          },
          {
            id: '8c9b336e-acc8-4e20-9195-6ed0634da9fc',
            name: 'The Residents'
          },
          {
            id: '8f92558c-2baa-4758-8c38-615519e9deda',
            name: 'The Clash'
          }
        ]);
      });
  });
});
