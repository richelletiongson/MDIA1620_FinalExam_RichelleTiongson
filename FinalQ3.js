const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
This will be a simple application, but potentially complicated to implement. There's a set of colors in the theme object. "red", "green", "blue", "yellow", and "orange". By default they are all true. The application allow users to add a color to the system as long as it's part of the 5 colors. You can toggle the colors from true to false with the command "toggle" and then a second readline for the color itself. Always DisplayUserColors after AddUserColor or ToggleThemeColor completes.

Here are some logistics that this application must follow
Only add a color when the theme color is true otherwise console log that it's not allowed
When a color is toggled from true to false, also remove the color from userColors. You can do this by making a new array, then looping through userColors and only pushing the colors that are true into the new array. Then reassign the new array to userColors.

PLANNING:

The set of colors in the theme is the only available colors, users can add colors but only if it is a color in the theme and it is true. 
If the color they wish to add is in the theme color and true, push to userColors, if not then console log "Not allowed."
If they toggle the color from true to false then for loop through all userColors and only the ones that are true will be pushed into the new array. 
New array will then be reassigned to userColors after. 
*/

let userColors = [];
let temporaryUserColors = [];
let theme = {
  red: true,
  green: true,
  blue: true, 
  yellow: true,
  orange: true,
  //the 5 color and their boolean value goes here 
};

//rename this to AddUserColor
function AddUserColor(){
  readline.question("What color would you like to add", _newColor=>{
    for(let key in theme){
      if(_newColor === key && theme[key] === true ){
        userColors.push(_newColor)
      } else {
        console.log("This is not allowed." )
      }
    }
  })
  //add a color to userColors
  DisplayUserColors();
  StartApp();
}

//rename this to DisplayUserColors
function DisplayUserColors(){
  console.log("Here are your current User Colors: ")
  for(let i=0; i<userColors; i++){
    console.log(userColors[i])
  }
  //add a color to userColors
}

//rename this to ToggleThemeColor
function ToggleThemeColor(){
  readline.question("What color would you like to toggle?", _toggleColor =>{
    
    for(let key in theme)
    if (_toggleColor === key){
      theme[key] = !theme[key];
        if (theme[key] === true) {
        temporaryUserColors.push(key, theme[key]);
        } 
    }
    temporaryUserColors = userColors;
  })
  //ask for a color to toggle
  DisplayUserColors();
  StartApp();
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add color"){
      AddUserColor();
    } else if (_command === "display colors"){
      DisplayUserColors();
    } else if (_command === "toggle theme colors") {
      ToggleThemeColor();
    } else if (_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();