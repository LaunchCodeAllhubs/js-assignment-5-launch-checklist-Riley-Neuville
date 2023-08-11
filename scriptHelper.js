// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   // Here is the HTML formatting for our mission target div.
   
                document.getElementById("missionTarget").innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
   if (testInput){
    let numTest = Number(testInput);
    if (isNaN(numTest)){
        return "Not a Number."}
    else{
        return "Is a Number."
    }
    }else{
    return "Empty"
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
let submissionStatus = true;
console.log("Attempting to submit");
if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty"){
    submissionStatus = false
    window.alert("All fields are required in order to submit.")
}
if (validateInput(pilot) == "Is a Number."){
    submissionStatus = false
    window.alert("invalid pilot name. Enter a valid name and try again.")
}
if (validateInput(copilot) == "Is a Number."){
    submissionStatus = false
    window.alert("invalid copilot name. Enter a valid name and try again.")
}
if (validateInput(fuelLevel) == "Not a Number."){
    submissionStatus = false
    window.alert("invalid fuel level. Enter a valid fuel level and try again.")
} 
if (validateInput(cargoLevel) == "Not a Number."){
    submissionStatus = false
    window.alert("invalid cargo level. Enter a valid cargo level and try again.")
}
document.getElementById("launchStatus").innerHTML = "Awaiting Information Before launch";
if(submissionStatus == true){
    document.getElementById("pilotStatus").innerHTML = `${pilot} ready`;
    document.getElementById("copilotStatus").innerHTML = `${copilot} ready`;
if (cargoLevel > 10000 && fuelLevel < 10000){
    document.getElementById("fuelStatus").innerHTML = "There is not enough fuel to reach the destination."
    document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
} else if(fuelLevel < 10000){
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
    document.getElementById("fuelStatus").innerHTML = "There is not enough fuel to reach the destination."
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
} else if(cargoLevel > 10000){
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
    document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("launchStatus").style.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
}else{
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
    document.getElementById("faultyItems").style.visibility = "hidden";
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
}
}
}

async function myFetch() {
    let response;
    let planetsReturned;

    response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await response.json();


    return planetsReturned;
}

function pickPlanet(planets) {
    let randNumber = Math.floor(Math.random() * 6);
    let randPlanet = planets[randNumber];
    return randPlanet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
