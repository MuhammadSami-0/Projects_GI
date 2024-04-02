import inquirer from "inquirer";
const personAge = await inquirer.prompt([
    {
        type: "input",
        name: "age",
        message: "What is your age",
    }
]);
if (personAge.age <= 12) {
    console.log("your age is less than 12");
}
else if (personAge.age >= 13 && personAge.age < 20) {
    console.log("your a teen ager");
}
else if (personAge.age >= 20 && personAge.age < 50) {
    console.log("your a grown up person");
}
else {
    console.log("your an elder");
}
