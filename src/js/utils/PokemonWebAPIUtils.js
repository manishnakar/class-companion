var $ = require('jquery')
var Q = require('Q')
var pokemonBaseEvolutions = require('../stores/PokemonBaseEvolutions')

var generateRandomOriginalPokemonNumber = function() {
  var randomPokemonNumber;
  var baseEvolutionFound = false;
  while (!baseEvolutionFound) {
    randomPokemonNumber = Math.floor(Math.random() * (152 - 1) + 1);
    if (pokemonBaseEvolutions.checkIfPokemonIsAnEvolutionaryForm(randomPokemonNumber)) {
      continue;
    } else {
      baseEvolutionFound = true;
    }
  }
  return randomPokemonNumber;
};


module.exports = {
  getNewPokemonFromServer: function(pokemonUrl) {
  // if no specific pokemon API url was given
  // generate a random pokemon
  pokemonUrl = pokemonUrl || ("api/v1/pokemon/" + generateRandomOriginalPokemonNumber())
  console.log('sending ajax to', pokemonUrl)
  return Q($.ajax({
      method: "GET",
      url: "http://pokeapi.co/" + pokemonUrl,
      dataType: "json"
    }));
  },

  getPokemonSprite: function(spriteUrl) {
  return Q($.ajax({
      method: "GET",
      url: "http://pokeapi.co/" + spriteUrl,
    }));
  },
}