# Foliumap

This handy map tool was created as a project for [MLH INIT 2022](https://init.mlh.io): Day 4.

Run the project [here](https://tinyurl.com/wyinit22fm)

## Inspiration
Many of us have been given a set of latitudes and longitudes without a visual mapped representation as to where the coordinates lead to, at least once within our lifetime. However, thanks to [Folium](http://python-visualization.github.io/folium/), simply plug in your latitude and longitude, and a map will be outputted, along with a blue marker at the exact location of your search, so that you won't lose your way if you decide to explore the surrounding environment.

## What it does
Foliumap uses the Folium Python library to create a map based on a latitude and a longitude. The program asks you to input a pair of latitudes and longitudes, and then plugs it into Folium's folium.Map() function. This function then outputs a real-world map, with a blue marker at the exact location of your search using the folium.Marker() function.

## How I built it
This project was built using Folium's quickstart guide. With the help of Google Colab's notebooks and some Python, this handy little map tool was created into existence.

## Challenges I ran into
A challenge that I ran into whilst coding this project was finding a way to make sure that the program user won't lose their way back to their coordinates when zooming out of the map. However, Folium's folium.Marker() function helped me to create a large blue marker that is visible when zooming out of the map.

## Accomplishments that I'm proud of
This is my first time working with a map API of any sort, and I'm glad to program a geographical hack.

## What I learned
I learned the capabilities of Folium, as well as its installation process, functions, and abilities. I will likely use Folium again in the future if I come face to face with a geography-themed project.

## What's next for Foliumap
Folium has a variety of commands and functions, and I intend to add more functions to Foliumap in the future.