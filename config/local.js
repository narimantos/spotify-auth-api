export default {
  port: 4040,

  clientURL: 'http://nariman.nl:8080/vue-spotify/',

  spotifyAPI:         'https://api.spotify.com/v1/',
  spotifyAccountsAPI: 'https://accounts.spotify.com/',

  clientID:     '81e25210945540bc8a9332dafd26bbfd',
  clientSecret: '0352197a9e154faea1fcb0e34fea47cd',
  redirectUri:  'http://nariman.nl:4040/callback',

  scope: 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-library-read playlist-read-private streaming playlist-modify-public playlist-modify-private user-library-modify ugc-image-upload user-follow-modify user-follow-read'
}
