$(document).ready(function() {
  console.log('test');
});

function sum(num1, num2) {
  return new Promise(function(resolve, reject) {
    resolve(num1 + num2);
  });
}

sum(1, 2).then(function(value) {
  console.log('first value ' + value);
  return sum(value, 1);
})
.then(function(newValue) {
  return sum(newValue, 1);
})
.then(function(newerValue) {
  console.log(newerValue);
});

var promise = Promise.resolve($.ajax('http://pokeapi.co/api/v2/pokemon/1'));

console.log(promise);

promise.then(function(result) {
  console.log(result.name);
  console.log(promise);
});



// promises are a list of things to run in order, good for api calls
