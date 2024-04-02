let guests=["Thomas Shelby","Newton","Bruce Wayne","Steve Rogers"]
//but for some reason Newton will be unable to attend the meating therefor we will invite another guest.
let newGuest="Imran Khan"
guests.splice(guests.indexOf("Newton"),1,newGuest)

//now we have to invite more guests.So we will have to add some more people in the list.
guests.push("Elon Musk","Ronaldo")

//now we have to remove some guests from the list
while (guests.length>2) {
    let removedGuest=guests.pop()
    console.log(`sorry ${removedGuest} is not in this meating`)
}

guests.forEach(guests => {
    console.log(`${guests} is invited in this meating`)
});