// let backpack = [];

// backpack.push("pokeball");
// backpack.push("potion");
// backpack.push("pokedollars");

// // backpack.shift();
// backpack.splice(0, 1);

// let stone = "water stone";
// backpack.push(stone);

// backpack.pop();

// // console.log(backpack.length, "items in backpack");

// backpack.push("great ball", "anitdote", "revive");

// let satchel = backpack.splice(3, 2);

// // for(let i = 0; i < backpack.length; i++){
// //     console.log(`This is the item at the index of ${i}:`, backpack[i]);
// // }

// for(let i = 0; i < 2; i++){
//     console.log(backpack[i]);
// }

// if(backpack.length > 2){
//     for(let i = 0; i < backpack.length; i++){
//         console.log(backpack[i]);
//     }
// } else {
//     for(let i = 0; i < backpack.length; i++){
//         console.log(`This is the item at the index of ${i}:`, backpack[i]);
//     }
// }

// console.log(backpack);
// console.log(satchel);

// ------------------------------

let guessMe = 54

while (guessMe < 100) {
    console.log("---------", guessMe);
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log("divisible by 4 or 5, added 25", guessMe);
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log("divisible by 3, subtracted 27", guessMe);
        guessMe -= 27
    } else {
        console.log("added 3", guessMe);
        guessMe += 3
    }
    guessMe += 22
    console.log("added 22", guessMe);
}

console.log("final value", guessMe);