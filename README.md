# Artist Search

# -----------

## OVERVIEW

### Components
[] Header
[X] Search
[X] Artist
[X] Paging
[] Release
[] Recording

### Containers
[X] SearchData
[X] ArtistData
[] ReleaseData
[] RecordingData

### Services
[] musicbrainz
[X] - getArtists
[X] - getReleases
[] - getRecordings
[X] lyrics
[X] - getLyrics

### Hooks

# -----------

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

# -----------

## Done
- apiCall/handleSubmit
- list
- Paging for Search
- searchTerm Query for Search Component
- Artist component
- Wrap Search's artists with links
- fetchReleases function
- Placeholder cover art
- Artist paging
- Query String for Artist (paging part of string)
- Add Page Number To Search (NEW)
- Move placeholder into service call (artwork.front, save placeholder image and import it)
- Reloading page
- Same search
- Header
- Release
- ReleaseData
- wrap Artist release's with Link
- fetchRecordings
- update ReleaseData
- wrap Release recording's with Link
- update Recording and RecordingData
- no Lyrics
- basic style
- more style (color palette, fonts)
- tests
- refactor (reuseable functions/components, clear code)

## Next Steps





