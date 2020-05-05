# Artist Search

-----------

## OVERVIEW

### Components
[] Header
[] Search
[] Artist
[] Album
[X] Recording

### Containers
[] Search

### Services
[] musicbrainz
[X] - getArtists
[] - getReleases
[] - getRecordings
[X] lyrics
[X] - getLyrics

### Hooks

-----------

## DETAILS

## Presentation Components

### Search
Input - Search Button
List - Matches with Links -> Artist
- MusicBrainz API - http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25
- Paging
- (BONUS: Query String)

### Artist
Name
List of Releases with Links -> Release
- MusicBrainz API - http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25
- Cover Art (plug url directly into img src) - http://coverartarchive.org/release/${releaseId}/front
- Placeholder art using API to determine if cover art exists
- Paging
- (BONUS: Query String)

### Release
Name
List of Recordings with Links ->  Recording
- MusicBrainz API - http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json

### Recording
Name
Lyrics
- Lyrics API - https://api.lyrics.ovh/v1/${artistName}/${recordingName}

-----------

## Next Steps
- apiCall/handleSubmit
- list
- Paging for Search
- searchTerm Query for Search Component
- Artist component
- Wrap Search's artists with links
- fetchReleases function

- Placeholder cover art
- Artist paging
- Query String for Artist



