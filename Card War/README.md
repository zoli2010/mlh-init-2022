# cardwar

This single-player card game was created as a project for [MLH INIT 2022](https://organize.mlh.io/participants/events/6813-init-2022): Day 2.

## What it does
Card War is a card game in which the computer and you have a deck of 26 cards each. Both of you battle it out by simply clicking on the screen. When the screen is clicked, the top card is drawn from your deck and the computer's deck. 
If the computer's card is higher than yours, you lose, and the computer puts your card and its card back into its deck. 
If your card is higher than the computer's you win, and you put your card and its card back into your deck. 
If both of you have cards of the same value, both of you draw, and you put your card back into your deck, and the computer puts its card back into its deck.
The game ends whenever someone runs out of cards. It will display a "You win!" or a "You lose!" message depending on the situation. To restart the game after the game ends, you can simply click the screen, and it'll restart the game.

## How I built it
Card War was built using HTML, CSS, and some magical JavaScript that made it all work. 

## Challenges I ran into
There were definitely some challenges that involved the main JavaScript code, as well as linking the script.js file to the HTML file. The script.js file wasn't being linked locally, as stated in the console logs, which led me to find out that you can't link a module type JavaScript file to a HTML file whilst being in "file://", and that you could only link it when your web page was being hosted on a local server.

I found out that the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) from Visual Studio Marketplace fit my needs perfectly.

## Accomplishments that I'm proud of
I'm proud of creating a card game that actually works. There were a couple of concepts that I really had to get my head around, but it came together in the end.

## What I learned
I learnt many things about JavaScript classes, functions, as well as changing HTML using JavaScript.
