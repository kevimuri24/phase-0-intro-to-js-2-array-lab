// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];



beforeEach(function(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
})

function destructivelyAppendCat(){
    cats.push("Ralph");
}
destructivelyAppendCat()

function destructivelyPrependCat(){
    cats.unshift("Bob");
}
destructivelyPrependCat()

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift();
}
destructivelyRemoveFirstCat()

function appendCat(){
    const coolCat  = [...cats, "Broom"]
    return coolCat;
}
appendCat();

function prependCat(){
    const coolCat  = ["Arnold", ...cats]
    return coolCat;
}
prependCat();

function removeLastCat(){
    const coolCat  = [...cats]
    coolCat.pop();
    return coolCat;
}
console.log(removeLastCat());

function removeFirstCat(){
    const coolCat  = [...cats]
    coolCat.shift();
    return coolCat;
}
console.log(removeFirstCat());




