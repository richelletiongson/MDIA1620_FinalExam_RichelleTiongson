const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a simple drinking store application. There are 2 parts to this

1) You need the organizer to register the age of each customer coming in. You will do this using an array.
2) Depending on the "settings" of the store, if alcohol is true that means it's adults only meaning anyone under the age of 19 are not allowed to drink and should be notified. When the alcohol setting is true, if the age in the registry is 19 or above console log "You are allow to drink in here." otherwise "You are not allowed in here.". When the setting is false, console log "Everyone is welcome in here!"

CHALLENGE 1
Have another setting for age. By default the age is set to 19, but the user can set the age to another desired drinking age by using the command "change age". This also means the age for notification needs to correspond to this setting

CHALLENGE 2
Make a VIP setting, and allow the user to type in an index that corresponds to the VIP. By default VIP is false, but the user can write "make vip", to assign a number to the VIP setting. The user can also write "cancel vip" to turn vip back to false.

When VIP is not false, when the notify function is called, only the VIP will get notified. Everybody else will get console logged "sorry the store is not available today."

PLANNING:
1) Using readline.question ask for the customer's age. Then push the age they state in the array "registry", this will resgister
and keep note of the customer's age.
2) Using NotifyAll function, if alcohol settings is false then everyone will be notified "Everyone is welcome in here". Else if alcohol settings is true then using a for loop all those under 19 will be notified "You are not allowed in here", 
if the customer is 19 and above they will be notified "You are allowed to drink in here".

CHALLENGE 1
Add age in settings, if the user command is to change age then the age originally set in settings will change and this will be the new age reflected in NotifyAll. 

CHALLENGE 2
Make a VIP setting, make it false. If the user "makes a vip" then the settings will be true and everyone will be notified
using NotifyAll function "Sorry the store is not available today." If the commands "cancel vip" then the VIP setting will return to false.

*/

let registry = [];
let settings = {
  alcohol: true
  //alcohol setting goes here
};

//rename this to RegisterUser
function RegisterUser(){
  readline.question("What is your age?", _newUserAge =>{
    registry.push(_newUserAge);
  })
  StartApp();
  //ask for the age with readline
}

//rename this to ToggleAlcohol
function ToggleAlcohol(){


  //toggle alcohol setting
}

//rename this to NotifyAll
function NotifyAll(){
  if (settings.alcohol === false){
    console.log("Everyone is welocome in here.")
  } 
  if (settings.alcohol === true){
    for(let i=0; i<registry.length; i++ ){
      if (registry[i]<19){
        console.log("You are not allowed in here.")
      } else if (registry[i]>=19){
        console.log("You are allowed to drink in here.")
      }
    }
  }
  StartApp();
  //go through the array to notify everyone
}

function StartApp(){
  readline.question("What is your command? ", _command=>{
    if(_command === "quit"){
      readline.close();
    } else{
      StartApp();
    }
  })
}

StartApp();