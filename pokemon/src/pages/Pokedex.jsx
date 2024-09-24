import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pokemonImage from '../assets/International_Pokémon_logo.svg.png';

// Componente principal da tela "Minha Pokedex"
const MinhaPokedex = () => {
    const [pokedexes, setPokedexes] = useState([]); // Estado para armazenar a lista de Pokédex
    const [newPokedexName, setNewPokedexName] = useState(''); // Estado para armazenar o nome da nova Pokédex
    const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de pesquisa

    // Função para buscar as Pokédexes da API ao carregar o componente
    useEffect(() => {
        // Exemplo de chamada para uma API que retorna as pokédexes do usuário
        fetch('/api/pokedex')
            .then(response => response.json())
            .then(data => setPokedexes(data))
            .catch(error => console.log(error));
    }, []);

    // Função para criar uma nova Pokédex
    const handleCreatePokedex = () => {
        if (newPokedexName.trim() === '') return; // Validação para nome vazio

        const newPokedex = {
            name: newPokedexName,
            qtdPokemons: 0 // Inicializa com zero pokémons
        };

        // Adiciona a nova pokédex na API e no estado
        fetch('/api/pokedex', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPokedex),
        })
            .then(response => response.json())
            .then(data => {
                setPokedexes([...pokedexes, data]); // Atualiza a lista de pokédexes
                setNewPokedexName(''); // Limpa o campo de texto
            })
            .catch(error => console.log(error));
    };

    // Função para deletar uma Pokédex
    const handleDeletePokedex = (id) => {
        fetch(`/api/pokedex/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setPokedexes(pokedexes.filter(pokedex => pokedex.id !== id)); // Atualiza a lista removendo a Pokédex deletada
            })
            .catch(error => console.log(error));
    };

    // Filtro de pesquisa
    const filteredPokedexes = pokedexes.filter(pokedex =>
        pokedex.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="background-conteiner" style={{ overflow: "auto" }}>
            <nav
                className="navbar navbar-expand-xxl bg-body-tertiary"
                style={{ backgroundColor: "#222", margin: "0 320px", padding: "10px" }}
                data-bs-theme="dark"
            >
                <div
                    className="container-fluid position-relative"
                    style={{ maxWidth: "1200px", padding: "0 40px" }}
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

            <div
                className="text-center"
                style={{
                    backgroundColor: "#B0B0B0",
                    paddingTop: "120px",
                    margin: "0 320px",
                    overflow: "auto",
                    height: "93.4%",
                }}
            >
                <h1
                    className="text-center form-group"
                    style={{
                        marginRight: "800px",
                        paddingTop: "40px",
                        paddingBottom: "20px",
                        margin: "0 320px",
                    }}
                >
                    Minha Pokédex
                </h1>

            </div>
        </div>
    );

};

export default MinhaPokedex;
