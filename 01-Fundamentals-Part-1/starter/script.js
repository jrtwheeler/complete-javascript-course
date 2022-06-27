// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// const Mark_Mass = 78;
// const Mark_Height = 1.69;
// const John_Mass = 92;
// const John_Height = 1.95;

// const Mark_BMI = Mark_Mass / (Mark_Height ** 2)
// const John_BMI = John_Mass / (John_Height * John_Height)

// if (Mark_BMI > John_BMI){
//     console.log("Mark's bmi of ${Mark_BMI} is higher than John's BMI ${John_BMI}")
// } else {
//     console.log("John's bmi of ${John_BMI} is higher than Mark's BMI ${Mark_BMI}")
// }

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear))

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let Dolphins_Score = (299) / 3;
let Koala_Score = (299) / 3;

if (Dolphins_Score > Koala_Score) {console.log(`Dolphins win by an score of ${Dolphins_Score} to ${Koala_Score}`)}
else if (Koala_Score > Dolphins_Score) {console.log(`Koalas win by an score of ${Koala_Score} to ${Dolphins_Score}`)}
else if (Dolphins_Score < 100 && Koala_Score < 100) {console.log(`Total score must equal 100. Keep playing.`)}
else if (Dolphins_Score === Koala_Score && Dolphins_Score < 100 && Koala_Score < 100) {console.log(`Total score must equal 100. Keep playing.`)}
else {console.log(`It's a tie.`)}

const day = "Monday"

switch(day) {
    case 'monday':
        console.log("Plan course structure.")
    case 'tuesday':
        console.log("Prepare theory videos.")
    case 'wednesday':
        console.log("Write code examples.")       
    case 'thursday':
        console.log("Record videos.")      
    case 'friday':
        console.log("Yay Friday.")
    case 'saturday':
        console.log("Enjoy the weekend.")
    case 'sunday':
        console.log("Not a valid day.")
}

if (day === "monday") {console.log("Plan course structure.")}
if (day === "tuesday") {console.log("Prepare theory videos.")}
if (day === "wednesday") {console.log("Write code examples.")}
if (day === "thursday") {console.log("Record videos.")}
if (day === "friday") {console.log("Yay Friday.")}
if (day === "saturday") {console.log("Enjoy the weekend.")}
if (day === "sunday") {console.log("Not a valid day.")}

const age = 18;
age >= 18 ? console.log('I like to drink wine') : 

const bill = 275;

bill >= 50 && bill <= 300 ? tip = bill * .15 : tip = bill * .2

console.log(bill)