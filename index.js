function helloWorld() {
  console.log('Hello World!');
}

function doSomethingAwsome() {
  console.log('Doing something awesome!');
}

async function doSomethingElse() {
  console.log('Doing something else!');
}

async function doSomeOtherThing(thing) {
  console.log(`Doing some other thing with ${thing}`);
}

// export the functions
module.exports = {
    helloWorld: helloWorld,
    doSomethingAwsome: doSomethingAwsome,
    doSomethingElse: doSomethingElse,
    doSomeOtherThing: doSomeOtherThing
};