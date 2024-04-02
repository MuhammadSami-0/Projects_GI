let magicians=["sami","sarim","basit","rabiaan","izhan"]
let greatMagicians: any[]=[]
function show_magicians(magicians_name:any[]){
    magicians_name.forEach(name => {
        console.log(name)
    });

}
function make_great(magicians:any[]){
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians[i]= `${magicians[i]} the great`;
        console.log(greatMagicians);
    }
}
make_great(magicians)
console.log("==============[modified names]==============")
show_magicians(greatMagicians)
console.log("==============[original names]==============")
show_magicians(magicians)
console.log("============================================")