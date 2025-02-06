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
  const copyOfCats = [...cats, "Broom"];
  return copyOfCats;
}

function prependCat(name) {
  const catCopy = ["Arnold", ...cats];
  return catCopy;
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}
