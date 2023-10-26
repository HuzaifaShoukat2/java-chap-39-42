//?  Chapter 39-42

// ! Question no 1

// function power(a,b){

//     return Math.pow(3,2);
// }
// console.log(power(),"Power of 3^2");

//! Question no 2

// function checkLeapYear(year) {
//  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// var year = prompt('Enter a year:');

// checkLeapYear(year);

//! Question no 3

// function SidesofTrianhgle(side1 , side2 , side3){
//     const sides = (side1 + side2 + side3) / 2;

//     const area = Math.sqrt(
//       sides * ((sides - side1) * (sides - side2) * (sides - side3))
//       );
      
//       return("Area of Triangle = ", area);
      
//     }
//     function AreaT() {
        
//         var side1 = parseInt(prompt("Enter right Side of traingle ")); // Side 1
//         var side2 = parseInt(prompt("Enter left Side of traingle ")); // Side 2
//         var side3 = parseInt(prompt("Enter base of traingle ")); // Side 3

//         AreaOfTriangle = SidesofTrianhgle(side1,side2,side3);

//         console.log( "Area Of Triangle is " , AreaOfTriangle);
// }

// AreaT();


// //! Question no 4
// function AverageOfSubject(subj1 , subj2 , subj3){

//     return (subj1 + subj2 + subj3)/3;
// }
// function PercentageTotal(subj1 , subj2 , subj3){
//  const totalMarks = (subj1 + subj2 + subj3);
//  const maxMark =300;
//  const persentage = (totalMarks/maxMark)*100;
//  return persentage;
// }

// function mainFunct(){
//     const subj1 = parseInt(prompt("Enter marks of subject 1:"));
//     const subj2 = parseInt(prompt("Enter marks of subject 2:"));
//     const subj3 = parseInt(prompt("Enter marks of subject 3:"));
//     const average = AverageOfSubject(subj1 , subj2 , subj3);
//     const percentage = PercentageTotal(subj1 , subj2 , subj3);
//     console.log ("Average Marks:"+ average.toFixed(2));
//     console.log ("Percentage:"+ percentage.toFixed(2));
// }
// mainFunct();


//! Question no 5

// function customIndexOf(str, charToFind){
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === charToFind){
//             return i;
//         }
//     }
//          return -1;

// }

// const inputString ="Hello World!";
// const charToSearch = "o"
// const index = customIndexOf(inputString, charToSearch);

// if(index !== -1){
//     console.log('The Character ' + charToSearch + ' is found at index ' + index);
// }
// else{
//     console.log('The Character ' + charToSearch + 'is  not found');

// }


//! Question no 6

// function deleteVowels(sentence){
//     const vowelsRegex = /[aeiouAEIOU]/g;
//     const result = sentence.replace(vowelsRegex, "");
//     return result;
// }
// const sentence = "The quick Brown FOx Jump Over The Lazy Dog"
// const resultSentence = deleteVowels(sentence);

// console.log("Original Sentence:" + sentence);
// console.log("Sentence Without Vowels:" + resultSentence);


//! Question no 7

// function countSucceessiveVowels(text){
//     // const vowels = "aeiou";
//     let count = 0;
//     for (let i = 0; i< text.length -1; i++ ){
//         const char = text[i];
//         const newchar = text[i+1];
//         switch(char + newchar){
//             case "ea": 
//             case "ui":
//             count++
//             break;

//         }
//     }
//     return count;

// }
// const text = "Please Read this application and give me gratuity";
// const result = countSucceessiveVowels(text);
// console.log("Occurence of succesive vowels:" + result)


//! Question no 8

// const distanceInKm = parseInt(prompt("Infut Distance in Km"));

// function distanceInMeters(){
//     const meters = distanceInKm*1000;
//     return meters;
// }

// function distanceInfeet(){
//     const feet = distanceInKm*3280.84;
//     return feet;
// }

// function distanceInInches(){
//     const Inches = distanceInKm*39370.1;
//     return Inches;
// }

// function distanceInCentimeters(){
//     const Centimeters = distanceInKm*100000;
//     return Centimeters;
// }

// console.log(distanceInKm + " kilometer is equal to:");
// console.log(distanceInMeters() +  "Meters");
// console.log(distanceInfeet() + " Feet");
// console.log(distanceInInches() + "  Inches");
// console.log(distanceInCentimeters() + "  centimeters");

// ! Question no 9


// function calculateOverTimePay(hourWorked){
// const regularHour = 8;
// const hourlyRate = 120;
// let overTimePay = 0;

// if(hourWorked > regularHour){
//     const overTimeHour = hourWorked - regularHour;
//     overTimePay = overTimeHour + hourlyRate;
// }
// return overTimePay;


// }
// const hourWorked = parseInt(prompt("Enter Your Today Work Hours"));
// const overTimePay = calculateOverTimePay(hourWorked);

// console.log("Hours worked: " + hourWorked);
// console.log("Over Time Pay: Rs. " + overTimePay.toFixed(2));



// ! Question no 10


// function calculateCurrencyNotes(amount) {
//     let hundredNotes = 0;
//     let fiftyNotes = 0;
//     let tenNotes = 0;
//    if (amount >= 10) {
//     hundredNotes = Math.floor(amount / 100);       // Calculate How Many Notes
//     amount -= hundredNotes * 100;   //For Remaining Amount

//       fiftyNotes = Math.floor(amount / 50);
//       amount -= fiftyNotes * 50;
  
//       tenNotes = Math.floor(amount / 10); 
//       amount -= tenNotes * 10;
      
    
//         console.log("You Will Have " + hundredNotes + " Hundred Rupee Of Notes" );
//         console.log( fiftyNotes + " Fifty Rupee Of Notes");
//         console.log(tenNotes + " Ten Rupee Of Notes");
     
//     }
//     if (amount > 0) {
//         console.log(amount + " Rupee Of Coins Left");
    
//     }
    
// }
//   const amount = parseInt(prompt("Enter Total Amount"));
//   calculateCurrencyNotes(amount);
  