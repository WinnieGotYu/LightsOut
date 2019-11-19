# Lights Off 

## The Game 
Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off. See if you can beat the score of 15! : )

Live demo available here: [LightsOff](https://lightsoff.netlify.com/)

![demo display](https://i.imgur.com/YcrapLb.png)

## Component Design 

### App
As often, this is a very simple component. It just renders the Board component.

### Board
The most sophisticated component. it holds the state that represents the in-memory grid of true/false for lights-on/off. Since the state for the board lives here, this is also were the setState() occurs. 

### Cell
A simpler component. This will simply render a <div>, where the CSS classes will indicate whether this cell is lit or unlit. This is what the user clicks on — but it will need to call a function it receives from the Board, since that will need to update the state.
