// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

const Mark_Mass = 78;
const Mark_Height = 1.69;
const John_Mass = 92;
const John_Height = 1.95;

const Mark_BMI = Mark_Mass / (Mark_Height ** 2)
const John_BMI = John_Mass / (John_Height * John_Height)

if (Mark_BMI > John_BMI){
    console.log(Mark_BMI)
} else {
    console.log(John_BMI)
}
