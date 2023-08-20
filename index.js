// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){

    cats.push("Ralph");

}

function destructivelyPrependCat(name){
    cats.unshift("Bob");

}

function destructivelyRemoveLastCat(){

    cats.pop();
}

function destructivelyRemoveFirstCat(){

    cats.shift();
}

function  appendCat(name){

    const newCats = [ ...cats, name];
    return newCats;
}


function  prependCat(name){

    const moreCats = [ name, ...cats];
    return moreCats;
}


function  removeLastCat(name){

    const lessCats = cats.slice(0, cats.length-1);
    return lessCats;
}

function  removeFirstCat(name){

    const evenLessCats = cats.slice(1);
    return evenLessCats;
}