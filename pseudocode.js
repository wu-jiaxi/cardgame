/* Pseudocode
-Create a layout of 3x3 with different backgrounds and layer it with different shapes
need to use grid/flexbox to grid out the sections

game should generate squares randomly each time the game is started 
need a function that generates a grid with 8 matching colors if the colors match, they disappear
using js they can be created by using an object class to make 16 sqaures using a for loop
*/

class MakeSquares {
    constructor(squareNum, squareColor) {
        this.square = squareNum;
        this.color = squareColor
    }
}

squareOne = new MakeSquares(1, "blue")
console.log(squareOne)



/* Use the WASD for player one and arrow keys for player two. For player one use the tab key to select the squares. For player two use the space key to select squares. In order to complete the game, the players need to empty the board of tiles by matching two of the same images. 
In a one player scenario theres a counter to see how fast you can clear the board
In a two player scenario, theres two boards and whoever clears theres the fastest wins.   */


https://www.youtube.com/watch?v=bbb9dZotsOc