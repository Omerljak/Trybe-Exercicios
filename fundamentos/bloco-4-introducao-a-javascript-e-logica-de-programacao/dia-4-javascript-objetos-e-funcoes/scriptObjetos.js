/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };*/

let player = {
    name: "Marta",
    lastName: 'Silva',
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018], // para acessar precisa player.bestInTheWorld ///
    medals: { 
        golden: 2, 
        silver: 3,
    }
}
/*console.table("A jogadora " + player.name + " " + player.lastName + " " + "tem " + player.age + " de idade.");*/


/*console.table("A jogadora " + player.name + " " + player.lastName + " " + "foi eleita a melhor do mundo" +" " + player.bestInTheWorld.length + " anos.");*/

console.table( "A jogadora possui " + player.medals.golden + " de ouro e " + player.medals.silver + " de prata.");