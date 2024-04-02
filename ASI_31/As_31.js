let person = ["sami", "admin", "zohaib"];
if (person.length == 0) {
    console.log("add some members in the list");
}
else {
    person.forEach(person => {
        if (person == "admin") {
            console.log(`hello how are you Mr.${person}`);
        }
        else {
            console.log(`hello ${person}`);
        }
    });
}
export {};
