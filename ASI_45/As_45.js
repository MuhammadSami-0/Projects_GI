function make_car(carManufacturer, carModel, ...options) {
    let car = { carManufacturer, carModel };
    options.forEach(([key, value]) => {
        car = Object.assign(car, { [key]: value });
    });
    return car;
}
console.log(make_car("Toyota", "Carolla", ["color", "black"], ["year", 2022]));
console.log(make_car("Honda", "Civic", ["color", "blue"], ["turbo", true]));
export {};
