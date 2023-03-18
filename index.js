/*
Challenge 1: Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
*/

//Challenge 1:

//Function that takes in an input between 0-100 and returns the output of the correct grade

const gradeGenerator = function (num) {
  if (num > 79) {
    return `You have an A`;
  } else if (num >= 60 && num <= 79) {
    return `You have a B`;
  } else if (num >= 49 && num <= 59) {
    return `You have a C-`;
  } else if (num >= 40 && num < 49) {
    return `You have a D-`;
  } else if (num < 40) {
    return `You have an E`;
  }
};
/*
Challenge 2: Speed Detector (Toy Problem)
Write a program that takes as input the speed of a car e.g 80. 
If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
*/
function speedChecker(speed) {
  let maxSpeed = 70;
  if (maxSpeed < speed) {
    console.log("Ok");
    return;
  }
}
