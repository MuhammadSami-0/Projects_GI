let magicians=["sami","sarim","basit","rabiaan","izhan"]
function show_magicians(magicians_name:any[]){
    magicians_name.forEach(name => {
        console.log(name)
    });

}
function make_great(magicians:any[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i]= `${magicians[i]} the great`;
        
    }
}
make_great(magicians)
show_magicians(magicians)