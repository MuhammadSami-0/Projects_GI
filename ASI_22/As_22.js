let fruits = ["mango", "apple", "cherry", "peach"];
console.log("error:", fruits[4]); //this is an intentional error. Index 4 doesnt exist in this array
//solving my error by adding one more element in the array
fruits.push("grapes");
console.log("error solved:", fruits[4]);
export {};
