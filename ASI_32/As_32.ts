let  person=["sami","admin","zohaib"]
let person2=["Sami","Admin","saad"]
let i=0

person2.forEach(person2 => {

         
    if (person2.toLowerCase()==person[i].toLowerCase()){
        console.log(`the name [${person2}] is not available `)
    }
    else{
        console.log(`the name ${person2} is available`)
    }
    i+=1
    
});
    
    
