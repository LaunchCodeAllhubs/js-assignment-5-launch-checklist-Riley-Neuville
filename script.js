// Write your JavaScript code here!


const form = document.getElementById("testForm");
const list = document.getElementsByTagName("ol");
const pilot = document.getElementById("pilotName");
const copilot = document.getElementById("copilotName");
const fuelLevel = document.getElementById("fuelLevel");
const cargoMass = document.getElementById("cargoMass");
/*window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});*/
form.addEventListener("submit", function(event){
event.preventDefault();
formSubmission(document,list, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
});