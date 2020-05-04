# Artist Search

-----------

## OVERVIEW

### Components
[] Header
[] Search
[] Artist
[] Album
[] Recording

### Containers
[] Search

### Services
[] musicbrainz
[] - getArtists
[] - getReleases
[] - getRecordings
[] lyrics
[] - getLyrics

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





