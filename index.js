// Code your solution in this file!

  function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if(someValue > 42){
        return someValue - 42;
    }else if (someValue < 42){
        return 42 - someValue;
    };
    
  };

  function distanceFromHqInFeet(someValue) {
  const answer = distanceFromHqInBlocks(someValue) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return answer;
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
      return Math.abs(start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    
    // If the distance is over 2500 feet, return 'cannot travel that far'
    if (distance > 2500) {
      return 'cannot travel that far';
    }
    
    // Calculate the fare based on the distance
    let fare;
    if (distance <= 400) {
      fare = 0;
    } else if (distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance < 2500) {
      fare = 25;
    }
    
    return fare;
  }