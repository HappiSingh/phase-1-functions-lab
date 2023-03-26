
const hq = 42;

function distanceFromHqInBlocks(pickupLocation) {
    const distanceInBlocks = Math.abs(hq - pickupLocation);
    return distanceInBlocks;
}

         
function distanceFromHqInFeet(pickupLocation) {
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet =  distanceInBlocks * 264;
    return distanceInFeet;
    }


function distanceTravelledInFeet(start, destination) {
    const startingPoint = distanceFromHqInFeet(start); 
    const destinationPoint = distanceFromHqInFeet(destination); 
    const distanceTravelled = destinationPoint - startingPoint;
    return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination); 
    let fare = 0;

    if (distanceTravelled <= 400) {
        return fare;

    } else if (distanceTravelled > 400 && distanceTravelled <=2000) {
        return fare = (distanceTravelled - 400) * 0.02;

    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return fare = 25;

    } else if (distanceTravelled > 2500) {
        return "cannot travel that far";
}
}
