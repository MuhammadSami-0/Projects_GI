import inquirer from "inquirer";
const calc = await inquirer.prompt([
    {
        type: "list",
        name: "operation",
        message: "choose from the following operations",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (calc.operation == "addition") {
    console.log(4 + 4);
}
else if (calc.operation == "subtraction") {
    console.log(12 - 4);
}
else if (calc.operation == "multiplication") {
    console.log(4 * 2);
}
else if (calc.operation == "division") {
    console.log(16 / 2);
}
else {
    console.log("wrong operation");
}
