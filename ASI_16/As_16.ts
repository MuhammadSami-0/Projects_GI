let guests=["Thomas Shelby","Newton","Bruce Wayne","Steve Rogers"]
//but for some reason Newton will be unable to attend the meating therefor we will invite another guest.
let newGuest="Elon Musk"
guests.splice(guests.indexOf("Newton"),1,newGuest)

//now we have to invite more guests.So we will have to add some more people in the list.
guests.push("Imran Khan","Ronaldo")
guests.forEach(guests => {
    console.log(`Its a pleasure meating with you ${guests}`)
});