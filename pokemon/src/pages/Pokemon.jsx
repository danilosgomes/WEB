import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { Link } from "react-router-dom";
import pokemonImage from "../assets/International_Pokémon_logo.svg.png";
import PokemonCard from "../Card/PokemonCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Pokemon = () => {
  
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    // Filtra os pokémons conforme o termo de busca muda
    if (searchTerm === "") {
      setFilteredPokemons(pokemons); // Exibe todos se a busca estiver vazia
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  }, [searchTerm, pokemons]);

  const getPokemons = () => {
    const endpoints = [];

    for (let i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    Promise.all(
      endpoints.map((endpoint) =>
        axios
          .get(endpoint)
          .then((res) => res.data)
          .catch((err) => {
            console.log(err);
            return null;
          })
      )
    ).then((results) => {
      const validPokemons = results.filter((result) => result !== null);
      setPokemons(validPokemons);
      setFilteredPokemons(validPokemons); // Inicializa com todos os pokémons
    });
  };

  return (
    <div
      className="background-container"
      style={{
        overflowY: "auto",
      }}
    >
      <nav
        className="navbar navbar-expand-xxl bg-body-tertiar"
        style={{
          backgroundColor: "#222",
          marginLeft: "320px",
          marginRight: "320px",
          padding: "10px",
        }}
        data-bs-theme="dark"
      >
        <div
          className="container-fluid position-relative"
          style={{
            maxWidth: "1200px",
            padding: "0",
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          <a aria-current="page" href="http://localhost:3000">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
              alt="Pokémon"
              width="112"
              height="41"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/pokemons">
                  Pokémons
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="#">
                  Gerações
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="#">
                  Pokédex
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ----- */}

      <div
        className="text-center"
        style={{
          backgroundColor: "#B0B0B0",
          paddingTop: "120px",
          marginLeft: "320px",
          marginRight: "320px",
          overflow: "auto",
          height: "93.4%",
        }}
      >
        <img
          src={pokemonImage}
          alt="Pokemon Logo"
          style={{
            height: "160px",
          }}
        />
        <div
          className="text-center form-group"
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            marginLeft: "320px",
            marginRight: "320px",
          }}
        >
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="container">
          <div className="row">
            {filteredPokemons.map((pokemon, index) => (
              <div className="col mb-3" key={index}>
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  img={pokemon.sprites.front_default}
                  life={pokemon.stats[0].base_stat}
                  atk={pokemon.stats[1].base_stat}
                  shild={pokemon.stats[2].base_stat}
                  speed={pokemon.stats[5].base_stat}
                  type={pokemon.types[0].type.name}
                  type2={
                    pokemon.types.length > 1 ? pokemon.types[1].type.name : null
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
