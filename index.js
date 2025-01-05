// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop(); 
}

function destructivelyRemoveFirstCat() {
  cats.shift(); 
}

function appendCat(name) {
  const CopyOfCats = [...cats, name];
  return CopyOfCats;
}

function prependCat(name) {
  const CopyOfCats = [name, ...cats];
  return CopyOfCats;  
}

function removeLastCat() {
  const CopyOfCats = cats.slice(0,cats.length - 1);
  return CopyOfCats;
}
function removeFirstCat() {
  const CopyOfCats = cats.slice(1);
  return CopyOfCats;

}
