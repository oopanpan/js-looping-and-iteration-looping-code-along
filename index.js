// Code your solutions in this file
function writeCards(name, event){
    let result = [];
    for(let i = 0; i < name.length; i++) {
        result.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return result;
}

function countDown(){
    let counter = 10;
    while (counter >= 0) {
        console.log(counter);
        counter-=1
    }
}