function make_shirt(size = "large", message = "i love typescript") {
    console.log(`the size of the shirt is ${size} and this message will be printed on the shirt "${message}"`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love python");
export {};
