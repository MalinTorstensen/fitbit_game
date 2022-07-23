import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { me as appbit } from "appbit";
import { today } from "user-activity";
import { goals } from "user-activity";
import * as messaging from "messaging";
import * as fs from "fs";

// Ask permissions
//if (appbit.permissions.granted("access_activity")) {
//   console.log(`${goals.adjusted.steps} Step Goal`);
//   if (goals.local.elevationGain !== undefined) {
//     console.log(`${goals.adjusted.elevationGain} Floor Goal`);
//   }
//}

//Change background from settings
let background = document.getElementById("background");
// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
    let json_data = {
  "color": color,
};
fs.writeFileSync("json.txt", json_data, "json");
  }
};

//let json_object  = fs.readFileSync("json.txt", "json");
//console.log("Color: " + json_object.color);

// Message socket opens
messaging.peerSocket.onopen = () => {
  console.log("App Socket Open");
};

// Message socket closes
messaging.peerSocket.onclose = () => {
  console.log("App Socket Closed");
};

// Update the clock every minute
clock.granularity = "minutes";

let json_object = fs.readFileSync("json.txt", "json");
let coin = json_object.coins;
let level = json_object.level;
let health = json_object.health;

if ( coin == undefined || level == undefined || health == undefined){
    var coins = 0;
    var level = 0;
    var health = 100;
  let coinsJson = JSON.parse(coins);
  let levelJson = JSON.parse(level);
  let healthJson = JSON.parse(health);
  
    let json_data = {
  "coins": coinsJson,
      "level": levelJson,
      "health": healthJson,
    }
fs.writeFileSync("json.txt", json_data, "json");
  let json_object  = fs.readFileSync("json.txt", "json");
}

// Get a handle on the <text> element
const level = document.getElementById("level");
const health = document.getElementById("health");
const valuetext = document.getElementById("value");
const coins = document.getElementById("coins");
const name = document.getElementById("name");
const dead = document.getElementById("dead");
const clickrevive = document.getElementById("revive");
health.text = "100/100";
name.text = "Elma";

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  
  var coin = 25;
coins.text = coin;
  
  // Update Level
  
  var steps = (today.adjusted.steps);
  let levelNumber = 0;
  
  if (steps >= 5000){
    levelNumber++;
  }
   if (steps >= 10000){
    levelNumber++;
  }
  if (steps >= 15000){
    levelNumber++;
  }
  if (steps >= 20000){
    levelNumber++;
  }
  if (steps >= 25000){
    levelNumber++;
  }
  if (steps >= 30000){
    levelNumber++;
  }
  if (steps >= 35000){
    levelNumber++;
  }
  
  // Change image when certain levels are reached
  if (levelNumber == 0){
    var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'inline';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
    var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
    if (levelNumber == 1){
    var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'inline';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
      var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
    if (levelNumber == 2){
    var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'inline';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
      var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
    if (levelNumber == 3){
    var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'inline';
      var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber == 4){
     var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
    var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'inline';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 5 && levelNumber <= 9){
     var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
    var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'inline';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 10 && levelNumber <= 14){
     var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
    var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'inline';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 15){
     var imageEggOne = document.getElementById("egg_1");
     imageEggOne.style.display = 'none';
    var imageEggTwo = document.getElementById("egg_2");
     imageEggTwo.style.display = 'none';
    var imageEggThree = document.getElementById("egg_3");
     imageEggThree.style.display = 'none';
     var imageEggFour = document.getElementById("egg_4");
     imageEggFour.style.display = 'none';
    var imageEggFive = document.getElementById("egg_5");
     imageEggFive.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'inline';
      }
  
  level.text = "Level " + `${levelNumber}`;
  
  //+ "   (" + `${steps}` + " steps" + ")"
  
  // Shows steps and level in console
  console.log(today.adjusted.steps)
  console.log(levelNumber)
  
}
  
   // Code For Health bar
//var value = 100;

  function Healthbar(x) {
    //Read value from data file
    let json_object  = fs.readFileSync("json.txt", "json");
    //Save value in var
    let value = json_object.health;
    
    let health = document.getElementById("health");
    
  //  isAdded = json_object.isAdded;
  //  if (isAdded == true){
  //    value+=50;
  //    var isAdded = false;
  //    let isAddedJson = JSON.parse(isAdded);
      
   //   }
    console.log(value);
    if (value > 0) {
    value--;  }
    else{
      clearInterval(x)
      Kill();
    }
    health.text = value + "/100";
    let valueJson = JSON.parse(value);
      let json_data = {
  //      "isAdded": isAddedJson,
        "health": valueJSON,
      }
      fs.writeFileSync("json.txt", json_data, "json");
    console.log(value);

    if (value <= 30){
      let health = document.getElementById("health");
      health.style.fill = "red";
      health.style.fontweight = "bold";
     }

    if (value > 30){
      let health = document.getElementById("health");
      health.style.fill = "white";
      health.style.fontweight = "normal";
    }
  }

var x = setInterval(Healthbar, 1000);
    

clickhealth.addEventListener("click", (evt) => {
let json_object = fs.readFileSync("json.txt", "json");
   //Read the health and coins from the data file
    let health = json_object.health;
    let coins = json_object.coins;
  
    if (coins >= 25){
      health += 50;
      coins -= 25;
      let healthJson = JSON.parse(health);
    let coinsJson = JSON.parse(coins);
    let json_data = {
      "coins": coinsJson,
      "health": healthJson,
      }
    fs.writeFileSync("json.txt", json_data, "json");
    }else {
      //Add text. NOT ENOUGH COINS.
    }
});

function Kill(){
var dead = document.getElementById("dead");
  var background = document.getElementById("background");
  dead.style.display = "inline";
  background.style.display = "none";
}


function Revive(value){
  var dead = document.getElementById("dead");
  var background = document.getElementById("background");
  dead.style.display = "none";
  background.style.display = "inline";
  level = 0;
  health = 100;
  coins = 0;
  
  //Reset JSON file
    let levelJson = JSON.parse(level);
    let healthJson = JSON.parse(health);
    let coinsJson = JSON.parse(coins);
    let json_data = {
        "coins": coinsJson,
      "health": healthJson,
      "level": levelJson,
      }
      fs.writeFileSync("json.txt", json_data, "json");
}

clickrevive.addEventListener("click", (evt) => {
  Revive();
});

// 1800000

// Code for Coins
 function getDailyCoin() {
   //Read the JSON file to find out how many coins player has
   let json_object = fs.readFileSync("json.txt", "json");
   //Save the number in a variable
    let coins = json_object.coins;
   //Add 25 to variable
   coins += 25;
   //Save the added coins into JSON data file
    let coinsJson = JSON.parse(coins);
    let json_data = {
        "coins": coinsJson,
      }
      fs.writeFileSync("json.txt", json_data, "json");
  }
setInterval(getDailyCoin, 1000);

//86400000 every 24h