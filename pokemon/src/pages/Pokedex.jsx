import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import pokemonImage from "../assets/International_Pokémon_logo.svg.png";
import Header from "../components/Header";


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

  const handleDeletePokedex = (id) => {
    setPokedexes(pokedexes.filter((pokedex) => pokedex.id !== id));
  };

  return (
    <div
      className="background-container"
      style={{
        overflowY: "auto",
      }}
    >
      {/* Menu de Navegação */}
      <Header />
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
            <div style={{
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
              zIndex: "0",
            }}>
              <Link style={{ textDecoration: "none", color: "#000"}} // Remove underline e mantém a cor do texto
                key={pokedex.id}
                to={`/pokedex/${pokedex.name}`} // Atualizado para passar o nome da Pokédex
              >
                <h5>{pokedex.name}</h5>
              </Link>
                <button onClick={() => handleDeletePokedex(pokedex.id)}>Deletar</button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
