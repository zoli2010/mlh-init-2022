# playlist-generator

This Spotify playlist generator was created as a project for [MLH INIT 2022](https://organize.mlh.io/participants/events/6813-init-2022): Day 1.

## Inspiration
This was inspired by a constant passion for trying to find the best music that I've ever heard in my life. Like almost everyone, I frequent Spotify for my musical needs, and I decided to use Spotify's algorithms as my main choice for a playlist generator.

## What it does
This simple Python file takes an endpoint URL, your Spotify OAuth API token, your Spotify User ID, along with some other parameters such as recommendation limit, market, seed genres, "target danceability", seed artists, and seed tracks. It then takes all this information, compiles it into a query, and makes a HTTP GET request to the /recommendations endpoint and gets the tracks.

## How I built it
Playlist generation is new to me, so I looked for [Spotify's API](https://developer.spotify.com/documentation/web-api/) and a suitable tutorial online. I soon found [this tutorial](https://medium.com/analytics-vidhya/build-your-own-playlist-generator-with-spotifys-api-in-python-ceb883938ce4), which is great for anyone planning to automatically create their own recommended playlist on Spotify.

## Challenges I ran into
The query requires Spotify URIs (Uniform Resource Indicators), which are used to define the seed artists and tracks, which could be easily found by hovering over the "Share" option on users and clicking "Copy Spotify URI". However, it turned out that newer versions of Spotify hid the "Copy Spotify URI" function, which led me to open up several tabs to search for the answer.

Spotify hid the URIs, but didn't completely remove them, as I found out after a kind soul mentioned that on Mac, you could simply hold down the Option key when hovering over the "Share" option, and it would make the "Copy Spotify URI" option appear.

## Accomplishments that I'm proud of
I'm pretty proud of the entire project. It's really fascinating to see how simple the Spotify API is, generating recommended tracks in less than 30 lines of code.

## What I learned
I learned a couple things about the Spotify API, such as the endpoints and parameters required, as well as how to get an OAuth token myself (just go to https://developer.spotify.com/console/get-recommendations/ and scroll down). 

## What's next for SpotifyGen
SpotifyGen only prints out a playlist recommended tracks into your console, which is alright considering how you can simply search for those tracks on Spotify and listen to the juicy beats, but the tutorial linked above also mentions how you can use the API to generate playlists right inside your Spotify account. Due to the timing of this event, I was unable to fully code everything, but I will integrate that feature in the near future.
