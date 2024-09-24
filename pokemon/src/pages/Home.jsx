import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import pokemonImage from "../assets/Group141.png";
import { Link }from "react-router-dom";

const Home = () => {
  return (
    <div className="background-container">
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
                <Link className="nav-link fs-5" to="/geracoes">
                  Gerações
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/pokedex">
                  Pokédex
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ----- */}

      <div
        className="navbar navbar-expand-xxl-block content-bar d-flex align-items-center overflow-auto"
        style={{
          backgroundColor: "#B0B0B0",
          paddingTop: "120px",
          paddingLeft: "50px",
          marginLeft: "320px",
          marginRight: "320px",
          height: "93.4%",
        }}
      >
        <div className="testo">
          <h1
            style={{
              maxWidth: "420px",
              margin: "0",
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: 1.4,
            }}
          >
            ENCONTRE TODOS OS SEUS POKÉMONS FAVORITOS
          </h1>
          <p
            className="Style-regular"
            style={{
              maxWidth: "420px",
              paddingTop: "80px",
              paddingBottom: "30px",
              margin: "0",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            Selecione os pokémons para sua batalha em diferentes pokédex. Você
            pode conhecer os tipos de Pokémons, seus pontos fortes e suas
            habilidades.
          </p>
          <Link type="button" className="btn btn-primary" to="pokemons">
            Ver Pokémons
          </Link>
        </div>
        <div>
          <img
            src={pokemonImage}
            alt="PokemonHome"
            style={{ width: "700px" }}
          />
        </div>
        <div
          className="content-bar text-center"
          style={{ paddingRight: "50px", width: "100%" }}
        >
          <p
            className="Style-thin text-center"
            style={{
              paddingTop: "40px",
              fontSize: "10px",
            }}
          >
            @Projeto da cadeira de Desenvolvimento de Software para WEB - 2024.1
            <br />
            Feito para competidores. | UFC - Campus Quixadá
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;