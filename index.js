const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
//first:
let returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};
returnFirstTwoDrivers;

//second:
let returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};
returnLastTwoDrivers;

//third:
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//fourth:
function createFareMultiplier(multiplier) {
  return function fareMultiplier(fare) {
    return fare * multiplier;
  };
}
createFareMultiplier()();

//fifth:
const fareDoubler = createFareMultiplier(2);
fareDoubler();

//sixth:
const fareTripler = createFareMultiplier(3);
fareTripler();

//seventh function
const selectDifferentDrivers = function (drivers, selectDriver) {
  return selectDriver(drivers);
};
selectDifferentDrivers(drivers, returnLastTwoDrivers);
