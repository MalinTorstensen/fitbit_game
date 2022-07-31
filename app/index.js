import clock from "clock";
import * as document from "document";
import { me as appbit } from "appbit";
import * as util from "../common/utils";
import { today } from "user-activity";
import * as fs from "fs";
import { display } from "display";

// Update the clock every minute
clock.granularity = "minutes";

display.autoOff = false;
display.on = true;

var read;
try {
read = fs.readFileSync("/private/data/json.txt", "cbor");
  startGame();
} catch(e) {
console.log('Oh snap we have an error: ', e);
console.log("else statement init");
 let cJson = JSON.parse(0);
  let lJson = JSON.parse(0);
  let hJson = JSON.parse(100);
  var lastDate = new Date().toJSON();
  
  
    let json_data = {
     "coins": cJson,
      "health": hJson,
      "level": lJson,
      "lastDate": lastDate
      }
fs.writeFileSync('/private/data/json.txt', json_data, 'cbor'); 
  
   let health = document.getElementById("health");
  let level = document.getElementById("level");
  let coins = document.getElementById("coins");
  
  health.text = 100;
  coins.text = 0;
  level.text = 0;
  startGame();
}


// Update the clock every minute
function startGame(){
  getValues();
//  getAddedValues();

document.getElementById("health").addEventListener("change", saveValues());
document.getElementById("level").addEventListener("change", saveValues());
document.getElementById("coins").addEventListener("change", saveValues());

// Update elements every tick with the current time
clock.ontick = (evt) => {
  // Clock Minutes
 // let mins = util.zeroPad(thisdate.getMinutes());
  
  
  var steps = (today.adjusted.steps);
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
  let levelNumber = parseInt(json_object.level);
  let imagechange = document.getElementById("showPet");
  
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
  
  if (levelNumber === 0){
    imagechange.href = "img/egg_1.png";
    }
    
    else if (levelNumber == 1){
    imagechange.href = "img/egg_2.png";}
    
    else if (levelNumber == 2){
    imagechange.href = "img/egg_3.png";}
    
    else if (levelNumber == 3){
    imagechange.href = "img/egg_4.png";}
    
    else if (levelNumber == 4){
    imagechange.href = "img/egg_5.png";}
      
     else if (levelNumber >= 5 && levelNumber <= 9){
    imagechange.href = "img/baby.png";}
    
    else if (levelNumber >= 10 && levelNumber <= 14){
    imagechange.href = "img/young.png"; }
    
   else if (levelNumber >= 15){
    imagechange.href = "img/adult.png";
    }
  
  // Shows steps and level in console
  
  var key = "l";
  
  console.log(today.adjusted.steps);
  console.log(levelNumber);
  
  UpdateFile(key, levelNumber);
  
  
}
// CLICK CLOCK ------- END


const dead = document.getElementById("dead");
const clickrevive = document.getElementById("revive");
  
  clickrevive.addEventListener("click", (evt) => {
  Revive();
    });


function AddCoin() {
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
  var oldVal = json_object.coins;
  console.log(oldVal);
  
  var oldValtwo = parseInt(json_object.coins);
  console.log(oldValtwo);
  
  
 // console.log("JSON health: " + json_object.health);
//  console.log("JSON coins: " + json_object.coins);
//  console.log("JSON level: " + json_object.level);
//  console.log("JSON date: " + json_object.lastDate);
//  console.log("--------");
 // var lDate = new Date(json_object.lastDate);
 // var nowDate = new Date();
 // var timeBetween = nowDate - lDate;
 // console.log("Time between dates: " + timeBetween);
  
//  var amount = timeBetween / 1800000;
//  console.log(amount);
  
  oldVal += 10;
  
  console.log(oldVal);
  
  var key = "c";
  
  UpdateFile(key, oldVal);
  
}
  
  
  
  
  

setInterval(AddCoin, 10000);

var x = setInterval(Healthbar, 5000);

function Healthbar(x) {
 // let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
//  console.log("--------");
//  var healthlDate = new Date(json_object.lastDate);
//  var healthnowDate = new Date();
//  var healthtimeBetween = healthnowDate - healthlDate;
 // console.log(json_object.lastDate);
 // console.log("health: Time between dates: " + healthtimeBetween);
  
 // var hamount = healthtimeBetween / 1800000;
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
   
  let value = parseInt(json_object.health);
    
    if (value > 0) {
      value --;
    }
      if (value <= 30){
      let health = document.getElementById("health");
      health.style.fill = "red";
      health.style.fontweight = "bold";
     }

    else if (value > 30){
      let health = document.getElementById("health");
      health.style.fill = "white";
      health.style.fontweight = "normal";
    }
      else if(value == 0){
         clearInterval(x);
         var dead = document.getElementById("dead");
          var background = document.getElementById("background");
          dead.style.display = "inline";
          background.style.display = "none";
         }
  var key = "h";
  
  UpdateFile(key, value);
  }

const clickhealth = document.getElementById("showPet");

clickhealth.addEventListener("click", (evt) => {
  let health = document.getElementById("health");
  var hValue = parseInt(health.text);
  var coins = document.getElementById("coins");
  var cValue = parseInt(coins.text);
  
    if (cValue >= 25){
      hValue += 50;
      cValue -= 25;
      coins.text = cValue;
      health.text = hValue;
      saveValues();
    }else {
      console.log("Not enough coins!!");
    }
});

function Revive(){
  var dead = document.getElementById("dead");
  var background = document.getElementById("background");
  dead.style.display = "none";
  background.style.display = "inline";
  let health = document.getElementById("health");
  health.text = 100;
  var x = setInterval(Healthbar, 1800000);
};

function saveValues(){
   let health = document.getElementById("health");
   var hValue = parseInt(health.text);
 // console.log("health: " + hValue);
  let level = document.getElementById("level");
   var lValue = parseInt(level.text);
 // console.log("level: " + lValue);
  let coins = document.getElementById("coins");
   var cValue = parseInt(coins.text);
 // console.log("coins: " + cValue);
  
  let cJson = JSON.parse(cValue);
  let lJson = JSON.parse(lValue);
  let hJson = JSON.parse(hValue);
  var lastDate = new Date().toJSON();
  
    let json_data = {
     "coins": cJson,
      "health": hJson,
      "level": lJson,
      "lastDate": lastDate
      }
    fs.writeFileSync('/private/data/json.txt', json_data, 'cbor');
}

function getValues(){
   let health = document.getElementById("health");
  let level = document.getElementById("level");
  let coins = document.getElementById("coins");
  
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
  let hValue = json_object.health;
  let cValue = json_object.coins;
  let lValue = json_object.level;
  
  health.text = hValue;
  coins.text = cValue;
  level.text = lValue;
}
  
/*  function getAddedValues(){
   let health = document.getElementById("health");
  let coins = document.getElementById("coins");
  
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
  let hValue = json_object.health;
  let cValue = json_object.coins;
  
  health.text = hValue;
  coins.text = cValue;
}*/
  
  
  
  
  
  
 function UpdateFile(key, newValue){
   let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
   
   let life = json_object.health;
   let coin = json_object.coins;
   let lvl = json_object.level;
   let lDate = json_object.lastDate;
   
   if (key === "c"){
      let coin = newValue;
      var el = document.getElementById('coins');
     
      el.text = parseInt(newValue);
     
      let cJson = JSON.parse(coin);
      let lJson = JSON.parse(lvl);
      let hJson = JSON.parse(life);
   
      let json_data = {
          "coins": cJson,
          "health": hJson,
          "level": lJson,
          "lastDate": lDate
            }
       fs.writeFileSync('/private/data/json.txt', json_data, 'cbor');
       }
   
   else if (key === "h"){
           let life = newValue;
           let health = document.getElementById("health");
  
           health.text = parseInt(newValue);
     
            let cJson = JSON.parse(coin);
            let lJson = JSON.parse(lvl);
            let hJson = JSON.parse(life);
   
            let json_data = {
              "coins": cJson,
              "health": hJson,
              "level": lJson,
              "lastDate": lDate
                }
            fs.writeFileSync('/private/data/json.txt', json_data, 'cbor');
            }
   
   else if (key === "l"){
            let lvl = newValue;
            let level = document.getElementById("level");
     
            level.text = parseInt(newValue);
     
            let cJson = JSON.parse(coin);
            let lJson = JSON.parse(lvl);
            let hJson = JSON.parse(life);
   
            let json_data = {
              "coins": cJson,
              "health": hJson,
              "level": lJson,
              "lastDate": lDate
                }
            fs.writeFileSync('/private/data/json.txt', json_data, 'cbor');
            }
   
 } 
  
}