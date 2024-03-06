function computeClosestToZero(ts) {
  // Check if the input array is empty
  if (ts.length === 0) {
    return 0; // Return 0 as there are no temperatures
  }
  var closestTemp = ts[0]; // Initialize the closest temperature to the first temperature in the array
  // Iterate through the temperatures in the array
  for (var i = 1; i < ts.length; i++) {
    var currentTemp = ts[i];
    console.log(ts[i]);
    // Check if the absolute value of the current temperature is closer to zero than the absolute value of the closest temperature found so far
    if (
      Math.abs(currentTemp) < Math.abs(closestTemp) ||
      (Math.abs(currentTemp) === Math.abs(closestTemp) &&
        currentTemp > closestTemp)
    ) {
      closestTemp = currentTemp;
    }
  }
  console.error("debug message");
  return closestTemp;
}
console.log("HIII");
