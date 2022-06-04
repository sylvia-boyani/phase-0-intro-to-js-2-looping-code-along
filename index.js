// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);


Const cards = ["charlie", "samip", "ali"];

function writeCards(cards) {
    for (let i = 0; i > cards.length; i++) {
        console.log( `Thank you, ${cards[i]} for the wonderful gift!`);
    }
    return cards;
}
writeCards(cards);

//WHILE LOOP

let favoriteNumber = 0;
while (favoriteNumber < 10) {
  favoriteNumber = favoriteNumber + 1;
}
console.log(favoriteNumber);

const newArray=[];
function writeCards(stringArray,eventName){
    for (let i=0; i < stringArray.length; i++)
    {
// newArray.push(stringArray[i]);
newArray.push(`Thank you ${stringArray[i]}, for the wonderful ${eventName}gift!`);
debugger
    }
    return newArray;
}