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
var readfile;
try {
read = fs.readFileSync("/private/data/json.txt", "cbor");
  readfile = fs.readFileSync("/private/data/steps.txt", "cbor");
  startGame();
} catch(e) {
console.log('Oh snap we have an error: ', e);
console.log("else statement init");
 let cJson = JSON.parse(0);
  let lJson = JSON.parse(1);
  let hJson = JSON.parse(100);
  var lastDate = new Date().toJSON();
 // var steps = JSON.parse((today.adjusted.steps));
  
  
    let json_data = {
     "coins": cJson,
      "health": hJson,
      "level": lJson,
      "lastDate": lastDate,
 //     "steps": steps
      }
fs.writeFileSync('/private/data/json.txt', json_data, 'cbor'); 
  
   let health = document.getElementById("health");
  let level = document.getElementById("level");
  let coins = document.getElementById("coins");
  
  health.text = 100;
  coins.text = 0;
  level.text = 1;
  
  let steps = today.adjusted.steps;
  let thisDate = new Date();
  thisDate.setHours(0, 0, 0, 0);
  
  let expJson = JSON.parse(steps);
  let valJson = JSON.parse(steps);
  let dateJson = thisDate.toJSON();
  console.log(expJson);
  console.log(valJson);
  console.log(dateJson);
  
       
  let data = {
      "exp": expJson,
      "newValue": valJson,
      "oldDate": dateJson
      }
    fs.writeFileSync('/private/data/steps.txt', data, 'cbor');
   
  
  startGame();
}


// Update the clock every minute
function startGame(){
  getValues();

// Update elements every tick with the current time
clock.ontick = (evt) => {
  console.log("Clock ticked");
  
  let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
  let levelNumber = parseInt(json_object.level);
  let imagechange = document.getElementById("showPet");
  
  //Update Level
  
  let json_obj = fs.readFileSync("/private/data/steps.txt", "cbor");
  let oldDate = json_obj.oldDate;
  let oldValue = json_obj.newValue;
  let exp = json_obj.exp;
  let thisDatenew = new Date();
  thisDatenew.setHours(0, 0, 0, 0);
  let thisDate = thisDatenew.toJSON();
  let newValue = today.adjusted.steps;
  console.log("----------------");
  console.log("oldValue: " + oldValue);
  console.log("oldDate: " + oldDate);
  console.log("exp: " + exp);
  console.log("thisDate: " + thisDate);
  console.log("newValue: " + newValue);
  
  if (oldDate == thisDate){
    console.log("Got into func");
      let amount = newValue - oldValue;
      exp += amount;
      console.log("exp: " + exp);
      UpdateSteps(exp, newValue, thisDate);
      let increase = levelNumber*5000;
      console.log(">>>>> " + increase);
    
      if (exp > increase){
      levelNumber++;
      let key = "l";
      UpdateFile(key, levelNumber);
      console.log(today.adjusted.steps);
      console.log(levelNumber);
      }
      }
  else {
    console.log(" XXXXXX Got into other func XXXXXXXXX");
        let increase = 5000;
        exp += newValue;
        UpdateSteps(exp, newValue, thisDate);
           }
  
  if (levelNumber === 1){
    imagechange.href = "img/egg_1.png";
    }
    
    else if (levelNumber == 2){
    imagechange.href = "img/egg_2.png";}
    
    else if (levelNumber == 3){
    imagechange.href = "img/egg_3.png";}
    
    else if (levelNumber == 4){
    imagechange.href = "img/egg_4.png";}
    
    else if (levelNumber == 5){
    imagechange.href = "img/egg_5.png";}
      
     else if (levelNumber >= 6 && levelNumber <= 10){
    imagechange.href = "img/baby.png";}
    
    else if (levelNumber >= 11 && levelNumber <= 15){
    imagechange.href = "img/young.png"; }
    
   else if (levelNumber >= 16){
    imagechange.href = "img/adult.png";
    }
  
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
  var oldValtwo = parseInt(json_object.coins);
  
  
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
   let json_object = fs.readFileSync("/private/data/json.txt", "cbor");
   let life = parseInt(json_object.health);
   let money = parseInt(json_object.coins);
  
    if (money >= 25){
      life += 50;
      money -= 25;
      let key = "h";
      UpdateFile(key, life);
      let key = "c";
      UpdateFile(key, money)
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
  
  
  
  function UpdateSteps(exp, newValue, thisDate){
    let expJson = JSON.parse(exp);
    let valJson = JSON.parse(newValue);
    let dateJson = thisDate;
   
      let json_data = {
          "exp": expJson,
          "newValue": valJson,
          "oldDate": dateJson
            }
       fs.writeFileSync('/private/data/steps.txt', json_data, 'cbor');
       }
 
  
  
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
          "lastDate": lDate,
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
              "lastDate": lDate,
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
              "lastDate": lDate,
                }
            fs.writeFileSync('/private/data/json.txt', json_data, 'cbor');
            }
 } 
  
}