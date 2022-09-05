/*const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(card) {
    console.log(`Thank you, ${cards}, for the wonderful surprise gift!`)
};
writeCards(cards[0]);
writeCards(cards[1]);
writeCards(cards[2]);
*/
/*
writeCards(["Guadalupe", "Ollie", "Ali"], "surprise");

function writeCards() {
    console.log ("Thank you, `${writeCards}`, for the wonderful surprise gift!")
}
*/
/*
for (let Cards = 0; Cards < 4; Cards++) {
    console.log("Thank you, `${writeCards}`, for the wonderful surprise gift!")
}
*/

function writeCards(names, event) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push("Thank you, " + names[i] + ", for the wonderful " + event + " gift!")
    }
    return messages;
  }

function countDown(){
for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown)
}
}