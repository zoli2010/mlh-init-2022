import requests

# settings
endpoint_url = "https://api.spotify.com/v1/recommendations?"
token = "YOUR_TOKEN_HERE"
user_id = "YOUR_ID_HERE"

# parameters (this is what defines the output of the song recommendations, these are configurable)
limit = 10
market = "US"
seed_genres = "indie"
target_danceability = 0.9
uris = []
seed_artists = '0XNa1vTidXlvJ2gHSsRi4A'
seed_tracks = '55SfSsxneljXOk5S3NVZIW'

query = f'{endpoint_url}limit={limit}&market={market}&seed_genres={seed_genres}&target_danceability={target_danceability}'
query += f'&seed_artists={seed_artists}'
query += f'&seed_tracks={seed_tracks}'

response = requests.get(query, headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {token}"
})

json_response = response.json()

print('Recommended Songs:')
for i, j in enumerate(json_response['tracks']):
    uris.append(j['uri'])
    print(f"{i+1}) \"{j['name']}\" by {j['artists'][0]['name']}")


