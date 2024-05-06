const mockedPokemons = {
  currentPokemon: {
    abilities: [
      {
        ability: {
          name: "static",
          url: "https://pokeapi.co/api/v2/ability/9/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "lightning-rod",
          url: "https://pokeapi.co/api/v2/ability/31/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    base_experience: 112,
    cries: {
      latest:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg",
      legacy:
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/25.ogg",
    },
    forms: [
      {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon-form/25/",
      },
    ],
    height: 4,
    id: 25,
    is_default: true,
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/25/encounters",
    name: "pikachu",
    order: 35,
    past_abilities: [],
    past_types: [],
    species: {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pokemon-species/25/",
    },
    sprites: {
      back_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
      back_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png",
      back_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png",
      back_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png",
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      front_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png",
      front_shiny:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
      front_shiny_female:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png",
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
          front_female: null,
        },
        home: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
          front_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png",
          front_shiny_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png",
        },
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png",
        },
        showdown: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/25.gif",
          back_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/female/25.gif",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/25.gif",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif",
          front_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/female/25.gif",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/25.gif",
          front_shiny_female:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/female/25.gif",
        },
      },
    },
    stats: [
      {
        base_stat: 35,
        effort: 0,
        stat: {
          name: "hp",
          url: "https://pokeapi.co/api/v2/stat/1/",
        },
      },
      {
        base_stat: 55,
        effort: 0,
        stat: {
          name: "attack",
          url: "https://pokeapi.co/api/v2/stat/2/",
        },
      },
      {
        base_stat: 40,
        effort: 0,
        stat: {
          name: "defense",
          url: "https://pokeapi.co/api/v2/stat/3/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-attack",
          url: "https://pokeapi.co/api/v2/stat/4/",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
          url: "https://pokeapi.co/api/v2/stat/5/",
        },
      },
      {
        base_stat: 90,
        effort: 2,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "electric",
          url: "https://pokeapi.co/api/v2/type/13/",
        },
      },
    ],
    weight: 60,
  },
  paginatedPokemons: [
    [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
      {
        name: "ivysaur",
        url: "https://pokeapi.co/api/v2/pokemon/2/",
      },
      {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon/3/",
      },
      {
        name: "charmander",
        url: "https://pokeapi.co/api/v2/pokemon/4/",
      },
      {
        name: "charmeleon",
        url: "https://pokeapi.co/api/v2/pokemon/5/",
      },
      {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon/6/",
      },
      {
        name: "squirtle",
        url: "https://pokeapi.co/api/v2/pokemon/7/",
      },
      {
        name: "wartortle",
        url: "https://pokeapi.co/api/v2/pokemon/8/",
      },
      {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon/9/",
      },
      {
        name: "caterpie",
        url: "https://pokeapi.co/api/v2/pokemon/10/",
      },
      {
        name: "metapod",
        url: "https://pokeapi.co/api/v2/pokemon/11/",
      },
      {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon/12/",
      },
      {
        name: "weedle",
        url: "https://pokeapi.co/api/v2/pokemon/13/",
      },
      {
        name: "kakuna",
        url: "https://pokeapi.co/api/v2/pokemon/14/",
      },
      {
        name: "beedrill",
        url: "https://pokeapi.co/api/v2/pokemon/15/",
      },
      {
        name: "pidgey",
        url: "https://pokeapi.co/api/v2/pokemon/16/",
      },
      {
        name: "pidgeotto",
        url: "https://pokeapi.co/api/v2/pokemon/17/",
      },
      {
        name: "pidgeot",
        url: "https://pokeapi.co/api/v2/pokemon/18/",
      },
      {
        name: "rattata",
        url: "https://pokeapi.co/api/v2/pokemon/19/",
      },
      {
        name: "raticate",
        url: "https://pokeapi.co/api/v2/pokemon/20/",
      },
    ],
    [
      {
        name: "spearow",
        url: "https://pokeapi.co/api/v2/pokemon/21/",
      },
      {
        name: "fearow",
        url: "https://pokeapi.co/api/v2/pokemon/22/",
      },
      {
        name: "ekans",
        url: "https://pokeapi.co/api/v2/pokemon/23/",
      },
      {
        name: "arbok",
        url: "https://pokeapi.co/api/v2/pokemon/24/",
      },
      {
        name: "pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/25/",
      },
      {
        name: "raichu",
        url: "https://pokeapi.co/api/v2/pokemon/26/",
      },
      {
        name: "sandshrew",
        url: "https://pokeapi.co/api/v2/pokemon/27/",
      },
      {
        name: "sandslash",
        url: "https://pokeapi.co/api/v2/pokemon/28/",
      },
      {
        name: "nidoran-f",
        url: "https://pokeapi.co/api/v2/pokemon/29/",
      },
      {
        name: "nidorina",
        url: "https://pokeapi.co/api/v2/pokemon/30/",
      },
      {
        name: "nidoqueen",
        url: "https://pokeapi.co/api/v2/pokemon/31/",
      },
      {
        name: "nidoran-m",
        url: "https://pokeapi.co/api/v2/pokemon/32/",
      },
      {
        name: "nidorino",
        url: "https://pokeapi.co/api/v2/pokemon/33/",
      },
      {
        name: "nidoking",
        url: "https://pokeapi.co/api/v2/pokemon/34/",
      },
      {
        name: "clefairy",
        url: "https://pokeapi.co/api/v2/pokemon/35/",
      },
      {
        name: "clefable",
        url: "https://pokeapi.co/api/v2/pokemon/36/",
      },
      {
        name: "vulpix",
        url: "https://pokeapi.co/api/v2/pokemon/37/",
      },
      {
        name: "ninetales",
        url: "https://pokeapi.co/api/v2/pokemon/38/",
      },
      {
        name: "jigglypuff",
        url: "https://pokeapi.co/api/v2/pokemon/39/",
      },
      {
        name: "wigglytuff",
        url: "https://pokeapi.co/api/v2/pokemon/40/",
      },
    ],
  ],
  pokemons: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
    {
      name: "wartortle",
      url: "https://pokeapi.co/api/v2/pokemon/8/",
    },
    {
      name: "blastoise",
      url: "https://pokeapi.co/api/v2/pokemon/9/",
    },
    {
      name: "caterpie",
      url: "https://pokeapi.co/api/v2/pokemon/10/",
    },
    {
      name: "metapod",
      url: "https://pokeapi.co/api/v2/pokemon/11/",
    },
    {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon/12/",
    },
    {
      name: "weedle",
      url: "https://pokeapi.co/api/v2/pokemon/13/",
    },
    {
      name: "kakuna",
      url: "https://pokeapi.co/api/v2/pokemon/14/",
    },
    {
      name: "beedrill",
      url: "https://pokeapi.co/api/v2/pokemon/15/",
    },
    {
      name: "pidgey",
      url: "https://pokeapi.co/api/v2/pokemon/16/",
    },
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon/17/",
    },
    {
      name: "pidgeot",
      url: "https://pokeapi.co/api/v2/pokemon/18/",
    },
    {
      name: "rattata",
      url: "https://pokeapi.co/api/v2/pokemon/19/",
    },
    {
      name: "raticate",
      url: "https://pokeapi.co/api/v2/pokemon/20/",
    },
  ],
};

export default mockedPokemons;
