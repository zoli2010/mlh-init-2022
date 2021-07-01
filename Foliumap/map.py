import folium

latitude = float(input())
longitude = float(input())

m = folium.Map(location=[latitude, longitude])
folium.Marker([latitude, longitude]).add_to(m)
m