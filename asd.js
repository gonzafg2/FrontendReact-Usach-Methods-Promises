const arrayNum = [1, 2, 3, 4, 5, 6, 7]
const pokemones = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]
// Array of pokemons
// Retornar los HP totales
const arrayPokemones = [
  {
    name: "Pikachu",
    type: "Electric",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    name: "Bulbasaur",
    type: "Grass",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    name: "Charmander",
    type: "Fire",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    name: "Squirtle",
    type: "Water",
    hp: 100,
    attack: 50,
    defense: 50,
    speed: 90,
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  }
]

const pokemonSaludo = arrayPokemones.map(pokemon => {
  if (pokemon.type === "Grass") pokemon.type = "Hierba"
  if (pokemon.type === "Fire") pokemon.type = "Fuego"
  if (pokemon.type === "Water") pokemon.type = "Agua"
  if (pokemon.type === "Electric") pokemon.type = "Eléctrico"
  pokemon.saludo = `Hola soy ${pokemon.name}`
  return pokemon
})
// console.log(pokemonSaludo)
const fireTypePokemon = arrayPokemones.filter(pokemon => pokemon.type === 'Fire')
// console.log(fireTypePokemon);

const sumaHP = arrayPokemones.reduce((acc, next) => (acc + next), 0)
// console.log(sumaHP);


// sumaHP.then((respuesta) => { return respuesta }).catch((error) => { return error })

const getPokemones = async () => { 
  const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await request.json()
  return data;
}
// IIFE
const showPokemons = (async () => {
  const pokemon = await getPokemones();
  // console.log(pokemon.results);
})();
/*
try {
  
} catch (error) {
  
}
*/

getPokemones().then(data => {
  console.log(data.results)
  // hacemos lo necesario con la data
})
  .catch(error => console.log("El error es; ", error))

  // .innerHTML()
// console.log(getPokemones());


/*
const numFiltered = arrayNum.filter((num) => { 
  return num > 300
})
console.log(numFiltered)
const foreach = pokemones.forEach((numero, i) => {
  console.log({i, numero });
  console.log({i, numero } + i + ": " + numero);
});
const map = pokemones.map((pokemon, i) => {
  console.log({i, pokemon });
  console.log({ i, pokemon } + i + ": " + pokemon);
  return pokemon.toUpperCase()
});
const map2 = pokemones.map((pokemon, i) => pokemon.toUpperCase());
console.log("pokemones: ", pokemones);
// console.log("forEach: ", foreach);
console.log("map2: ", map2);
*/

/* Silecio por favor */
/* Miren al profesor por favor */