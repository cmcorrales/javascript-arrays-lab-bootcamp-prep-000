const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}

function appendKitten(name) {
  var kittens2 = [...kittens]
  kittens2.push(name);
  return kittens2
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}