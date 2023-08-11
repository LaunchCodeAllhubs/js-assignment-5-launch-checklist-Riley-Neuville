// Write your JavaScript code here!

const form = document.getElementById("testForm");
const list = document.getElementsByTagName("ol");
const pilot = document.getElementById("pilotName");
const copilot = document.getElementById("copilotName");
const fuelLevel = document.getElementById("fuelLevel");
const cargoMass = document.getElementById("cargoMass");
window.addEventListener("load", function() {

   let listedPlanets;
   listedPlanets = myFetch()
   .then((listedPlanets) => {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let pickedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document,pickedPlanet.name,pickedPlanet.diameter,pickedPlanet.star,pickedPlanet.distance,pickedPlanet.moons,pickedPlanet.image);
   })})
   
form.addEventListener("submit", function(event){
event.preventDefault();
formSubmission(document,list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
});