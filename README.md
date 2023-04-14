# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

√ - As a user, I can see a three by three grid game board on the page.
//Create branch
//Branch name: game-board
//Create a 3 x 3 box grid, nine square grid
//Pass state array to Square component

√ - As a user, I can click on a square to mark it.
//Create a function named handleClick to mark it with an X or an O for one user in the Square.js.
//Create a div, give it a className and use state for handleClick

√ - As a user, my partner can click on a square after me and see their mark.
//Create a function named handleGamePlay
//Create a conditional to click on square after another player has taken their turn

√ - As a user, I can't click on a square that has already been marked.
//In the handleGamePlay function add conditionals that checks to see if box has been clicked and if it has, user cannot click

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
//Need conditional for 3 squares in a row to win
//Create a function for array to calculate winner(squares set horizontal wins, vertical wins or diagonal wins)
//Create an array that holds all winning conditions
//Create a for loop that holds the calculations logic
//handleGamePlay function will keep track of what is clicked and checks winning conditions, if not 
//Create a prompt/alert for winner

- As a user, I can't continue playing the game after the game has been won.
//Create a condition to end game .... that stops players after the game has been won
//Create a conditional check after each play using a while loop

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
//Create a prompt for when game has ended if there are no more moves

- As a user, I can click on a restart button that will clear the game board.
//Create a restart button to clear game-board

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
//Choose color and styling for backgrounds, box backgrounds or pictures, borders, etc. in .css

- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
//Create a prompt for next players turn

- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).
//Create a function to let user choose X or O, color, emoji, etc. from a list
// make the icon into a variable

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.


- As a developer, I have well written README file with instructions on how to access my repository.

- As a developer, my variables are all named semantically.

- As a developer, I have refactored and efficient code.

- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)

- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
