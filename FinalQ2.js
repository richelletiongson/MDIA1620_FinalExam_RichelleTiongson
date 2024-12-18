const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are creating a badge system. This badge system depends on the amount of points you accumulated in these modes "new", "easy", "medium", "hardest", and "apocolypse", by default they all start with 0. The simple application has 2 core functions.

1) ShowStatus, when user use the command "status", the system will show every mode and it's current points.
2) AddPoints, when user use the command "add", the system will ask the user which mode they want to add 1 point to. The user will write one of the mode and that mode will be incremented by 1.

CHALLENGE 1
1) Make a function MakeBadge. This function goes through all the badge and add the points together. If the points total is...
  - less than 10 -> "horrible newbie"
  - between 10 and 20 -> "adventurer"
  - between 20 to 30 -> "slayer"
  - between 30 to 40 -> "divined"
  - above 40 -> "eternal"

CHALLENGE 2
2) Make it that when you calculate points, you multiply the points to the length of the key. EG if "new" only has 1 point, then you will add 3 point to the total because "new" has 3 letters and 3*1 = 3. This is also why having more points in apocolypse will get you the most points because the word apocolypse is the longeest

PLANNING:

1) When user command is "status", then using a for loop, loop through all the modes in badge and display each mode with their current points. 

2) When user command is "add", ask user which mode they want to add to using readline.question then using another for loop, loop through all the modes in badge and if the mode is equal to the mode the user wants to add to,
then add 1 to the current point within that mode (increment by 1). 

CHALLENGE 1

Using for loop, loop through all the modes in badge and in every loop the current points of the mode within that loop will be added to the points total. 
Then using if else statement, console log the messages corresponding to the point increments found above in the instructions. 

CHALLENGE 2

For each mode multiply the points with the amount of letters that spell out that mode. This will be included when calculating points in the AddPoints function.

*/

let badge = {
  new: 0, 
  easy: 0, 
  medium: 0,
  hardest: 0,
  apocolypse: 0,

  //modes go here
};

function MakeBadge(){       //This is challenge 1
  let addedPoints = 0;
  for (let key in badge){
    addedPoints.add(badge[key])
  }
  if (addedPoints < 10){
    console.log("horrible newbie")
  } else if (addedPoints >= 10 && addedPoints < 20){
    console.log("adventurer")
  } else if (addedPoints >=20 && addedPoints < 30){
    console.log("slayer")
  } else if (addedPoints >=30 && addedPoints < 40){
    console.log("divined")
  } else if (addedPoints >= 40){
    console.log("eternal")
  }
}

//rename this to ShowStatus
function ShowStatus(){
  for(let key in badge){
    console.log(key,": ", badge[key])
  }
  //loop through the badge and log all the mode and all their corresponding points
  StartApp();
}

//rename this to AddPoints
function AddPoints(){
  readline.question("Which mode would you like to add to?", _addToMode =>{
    for(let key in badge){
      if(_addToMode === key){
        badge[key] = badge[key] + 1;
        badge[key] = badge[key] * key.length; //This is challenge 2
      }
    }
  })
  //Add the point to the correct mode by capturing the readline
  StartApp();
}


function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "add points"){
      AddPoints();
    } else if (_command === "show status"){
      ShowStatus();
    } else if (_command === "show badge"){
      MakeBadge();
    } else if (_command === "quit"){
      readline.close();
    } else {
      StartApp();
    }
  })
}
 
StartApp();