// Code your solution in this file!
function distanceFromHqInBlocks (distance) {
    return Math.abs(42 - distance)
}

function distanceFromHqInFeet (distance) {
    return Math.abs(42 - distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    const blockLengthInFeet = 264; 
    const distanceInBlocks = Math.abs(destination - start); 
    const distanceInFeet = distanceInBlocks * blockLengthInFeet; 
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice;
  
    if (distanceInFeet <=400) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else if(distanceInFeet>2500) {
      farePrice = 'cannot travel that far';
    }
  
    return farePrice;
  }
