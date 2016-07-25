$(document).ready(function() {
  console.log('test');
});
//
// function sum(num1, num2) {
//   return new Promise(function(resolve, reject) {
//     resolve(num1 + num2);
//   });
// }
//
// sum(1, 2).then(function(value) {
//   console.log('first value ' + value);
//   return sum(value, 1);
// })
// .then(function(newValue) {
//   return sum(newValue, 1);
// })
// .then(function(newerValue) {
//   console.log(newerValue);
// });
//
// var promise = Promise.resolve($.ajax('http://pokeapi.co/api/v2/pokemon/1'));

// console.log(promise);

// promise.then(function(result) {
//   console.log(result.name);
//   console.log(promise);
// });

function ajaxPromise(url) {
  return Promise.resolve($.ajax(url));
}

ajaxPromise('http://pokeapi.co/api/v2/pokemon/5')
.then(function(value) {
  var name = value.abilities[1].ability.name;
  var url = value.abilities[1].ability.url;

  return ajaxPromise(url);

  console.log(name);
  console.log(url);
})
.then(function(link) {

  // console.log(link);
  var pokemons = link.pokemon;
  // return ajaxPromise(pokemons);

  // var eachLoop = link.pokemon;
  //
  // eachLoop.forEach(myFunction)
  //
  // function myFunction(obj)
  // {
  //   console.log(obj.pokemon.name);
  //   $('body').append('<div>' + obj.pokemon.name + '</div>')
  //
    var random = pokemons[Math.floor(Math.random() * pokemons.length)];
    console.log(random);
    return ajaxPromise(random.pokemon.url);
  // }
}).then(function(pokemon) {
  $('body').append('<img src="'+ pokemon.sprites.front_default +'">')
})
.catch(function(error) {
  alert('alert');
});

// promises are a list of things to run in order, good for api calls
