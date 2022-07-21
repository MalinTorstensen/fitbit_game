import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { me as appbit } from "appbit";
import { today } from "user-activity";

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
  //let steps = (userActivity.today.adjusted);
  var steps = (today.adjusted.steps);
  
  let levelNumber = 0;
  
  if (steps >= 5000){
    levelNumber ++;
  }
   if (steps >= 10000){
    levelNumber ++;
  }
  if (steps >= 15000){
    levelNumber ++;
  }
  if (steps >= 20000){
    levelNumber ++;
  }
  if (steps >= 25000){
    levelNumber ++;
  }
  if (steps >= 30000){
    levelNumber ++;
  }
  if (steps >= 35000){
    levelNumber ++;
  }
  
  if (levelNumber == 2){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'inline';
     var imageElma = document.getElementById("elma");
     imageElma.style.display = 'none';
      }
  
  if (levelNumber == 5){
     var imageEgg = document.getElementById("egg");
     imageEgg.style.display = 'none';
     var imageElma = document.getElementById("elma");
     imageElma.style.display = 'inline';
      }
  

  //level.text = `${steps}` + " steps";
  level.text = "Level " + `${levelNumber}` + "   (" + `${steps}` + " steps" + ")";
  console.log(today.adjusted.steps)
  console.log(levelNumber)
}



