let guests = ["Thomas Shelby", "Newton", "Bruce Wayne", "Steve Rogers"];
//but for some reason Newton will be unable to attend the meating therefor we will invite another guest.
let newGuest = "Elon Musk";
guests[guests.indexOf("Newton")] = newGuest;
guests.forEach(guests => {
    console.log(`Its a pleasure meating with you ${guests}`);
});
export {};
