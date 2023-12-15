
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Example usage:
  const allDrivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  const firstTwoDrivers = returnFirstTwoDrivers(allDrivers);
  console.log(firstTwoDrivers);  // Output: ['Driver1', 'Driver2']
 
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Example usage:
  const allDrivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  const lastTwoDrivers = returnLastTwoDrivers(allDrivers);
  console.log(lastTwoDrivers);  // Output: ['Driver3', 'Driver4']
  

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Example usage:
  const allDrivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  const firstTwoDrivers = selectingDrivers[0](allDrivers);
  console.log(firstTwoDrivers);  // Output: ['Driver1', 'Driver2']
  
  const lastTwoDrivers = selectingDrivers[1](allDrivers);
  console.log(lastTwoDrivers);  // Output: ['Driver3', 'Driver4']

  
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Example usage:
  const fareMultiplierBy4 = createFareMultiplier(4);
  const fare = 10;
  const quadrupledFare = fareMultiplierBy4(fare);
  console.log(quadrupledFare);  // Output: 40

  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  // Example usage:
  const fare = 10;
  const doubledFare = fareDoubler(fare);
  console.log(doubledFare);  // Output: 20
  

  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  const fareTripler = createFareMultiplier(3);
  
  // Example usage:
  const fare = 10;
  const tripledFare = fareTripler(fare);
  console.log(tripledFare);  // Output: 30


  const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
  };
  
  // Example usage:
  const allDrivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  const firstTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers);  // Output: ['Driver1', 'Driver2']
  
  const lastTwoDrivers = selectDifferentDrivers(allDrivers, returnLastTwoDrivers);
  console.log(lastTwoDrivers);  // Output: ['Driver3', 'Driver4']
  
  