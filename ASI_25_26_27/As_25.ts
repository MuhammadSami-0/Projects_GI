import inquirer from "inquirer";

const alienColor=await inquirer.prompt([
    {
        type: "list",
        name:"color",
        message:"What is the color of the alien",
        choices:["green","red","yellow","unknown"]

    }
])

if (alienColor.color=="green"){
    console.log(`color of the alien is ${alienColor.color}`)
}
else if (alienColor.color=="red"){
    console.log(`color of the alien is ${alienColor.color}`)
}
else if (alienColor.color=="yellow"){
    console.log(`color of the alien is ${alienColor.color}`)
}
else{
    console.log("we didint see the color of the alien")
}
