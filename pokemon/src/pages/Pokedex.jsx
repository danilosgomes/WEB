import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import pokemonImage from "../assets/International_Pokémon_logo.svg.png";

const Pokedex = () => {
  // Dados fictícios da Pokédex
  const [pokedexes, setPokedexes] = useState([
    { id: 1, name: "Kanto" },
    { id: 2, name: "Johto" },
    { id: 3, name: "Hoenn" },
    { id: 4, name: "Sinnoh" },
    { id: 5, name: "Unova" },
    { id: 6, name: "Kalos" },
    { id: 7, name: "Alola" },
    { id: 8, name: "Galar" },
  ]);

  // Estado para controle da nova Pokédex
  const [newPokedexName, setNewPokedexName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Função para adicionar uma nova Pokédex
  const handleCreatePokedex = () => {
    if (newPokedexName.trim()) {
      setPokedexes([
        ...pokedexes,
        { id: pokedexes.length + 1, name: newPokedexName },
      ]);
      setNewPokedexName("");
      setIsCreating(false);
    } else {
      alert("Por favor, insira um nome para a Pokédex.");
    }
  };

  return (
    <div
      className="background-container"
      style={{
        overflowY: "auto",
      }}
    >
      {/* Menu de Navegação */}
      <nav
        className="navbar navbar-expand-xxl bg-body-tertiary"
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
            <img src={pokemonImage} alt="Pokémon" width="112" height="41" />
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
      {/* Corpo da página */}
      <div
        className="text-center"
        style={{
          backgroundColor: "#B0B0B0",
          paddingTop: "80px",
          marginLeft: "320px",
          marginRight: "320px",
          overflow: "auto",
          height: "93.4%",
        }}
      >
        <h1
          className="d-flex justify-content-start mb-4"
          style={{ marginLeft: "50px" }}
        >
          Pokédex
        </h1>
        {/* Botão de adicionar Pokédex */}
        <div
          className="d-flex justify-content-start mb-3"
          style={{ marginLeft: "50px" }}
        >
          <button
            className="btn btn-primary"
            onClick={() => setIsCreating(true)}
          >
            Criar
          </button>
        </div>
        {/* Campo para criar nova Pokédex */}
        {isCreating && (
          <div style={{ marginLeft: "50px", marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Nome da nova Pokédex"
              value={newPokedexName}
              onChange={(e) => setNewPokedexName(e.target.value)}
              style={{
                padding: "10px",
                marginRight: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button className="btn btn-success" onClick={handleCreatePokedex}>
              OK
            </button>
            <button
              className="btn btn-danger"
              onClick={() => setIsCreating(false)}
              style={{ marginLeft: "10px" }}
            >
              Cancelar
            </button>
          </div>
        )}
        <hr style={{ margin: "50px" }} />

        {/* Listagem das Pokédexes em linhas e colunas */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "20px",
            marginLeft: "50px",
            marginRight: "50px",
          }}
        >
          {pokedexes.map((pokedex) => (
            <Link
              key={pokedex.id}
              to={`/pokedex/${pokedex.name}`} // Atualizado para passar o nome da Pokédex
              style={{
                flex: "1 1 calc(33.33% - 20px)", // 3 colunas por linha
                maxWidth: "calc(33.33% - 20px)",
                backgroundColor: "#fff",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                cursor: "pointer",
                textDecoration: "none", // Remove underline
                color: "inherit", // Mantém a cor do texto
                transition: "transform 0.3s ease",
              }}
            >
              <h5 style={{ margin: "0" }}>{pokedex.name}</h5>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
