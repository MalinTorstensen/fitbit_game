import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { me as appbit } from "appbit";
import { today } from "user-activity";
import * as messaging from "messaging";

let background = document.getElementById("background");

// Message is received
messaging.peerSocket.onmessage = evt => {
  console.log(`App received: ${JSON.stringify(evt)}`);
  if (evt.data.key === "color" && evt.data.newValue) {
    let color = JSON.parse(evt.data.newValue);
    console.log(`Setting background color: ${color}`);
    background.style.fill = color;
  }
};

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

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");
const level = document.getElementById("level");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let thisdate = evt.date;
  let hours = thisdate.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  
  let mins = util.zeroPad(thisdate.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
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
  
  if (levelNumber <= 4){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'inline';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 5 && levelNumber <= 9){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'inline';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 10 && levelNumber <= 14){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'inline';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'none';
      }
  
  if (levelNumber >= 15){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'none';
     var imageElmaBaby = document.getElementById("elma-baby");
     imageElmaBaby.style.display = 'none';
    var imageElmaYoung = document.getElementById("elma-young");
     imageElmaYoung.style.display = 'none';
    var imageElmaAdult = document.getElementById("elma-adult");
     imageElmaAdult.style.display = 'inline';
      }
  
  //if (levelNumber == 5){
  //   var imageEgg = document.getElementById("egg");
  //   imageEgg.style.display = 'none';
  //   var imageElma = document.getElementById("elma");
  //   imageElma.style.display = 'inline';
   //   }
  

  level.text = "Level " + `${levelNumber}` + "   (" + `${steps}` + " steps" + ")";
  
  // Shows steps and level in console
  
  console.log(today.adjusted.steps)
  console.log(levelNumber)
}

