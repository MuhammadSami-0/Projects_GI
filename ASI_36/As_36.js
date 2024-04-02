import inquirer from "inquirer";
function make_shirt(size, message) {
    console.log(`the size of the shirt is ${size} and this message will be printed on the shirt "${message}"`);
}
let customizeShirt = await inquirer.prompt([
    { type: "number", name: "size", message: "enter the size of the shirt:-" },
    { type: "input", name: "shirtMessage", message: "what message do you want me to print on your shirt:-" }
]);
make_shirt(customizeShirt.size, customizeShirt.shirtMessage);
