var array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      //console.log("I am 1 strange loop.");
      //array.push("I am 1 strange loop.");
      console.log(array.push("I am 1 strange loop."));
    } else {
      //console.log(`I am ${i} strange loops.`);
      //array.push(`I am ${i} strange loops.`);
      console.log(array.push(`I am ${i} strange loops.`));
    }
  }
  return array
}

function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done"
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return array;
}