import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import db from "../data/db"; // Importando o banco de dados
import { useState } from "react";

const PokemonCard = ({
  id,
  name,
  img,
  life,
  atk,
  shild,
  speed,
  type,
  type2,
  addToPokedex,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleAddToPokedex = () => {
    setDropdownVisible(!dropdownVisible); // Alterna a visibilidade do dropdown
  };

  const handleSelectPokedex = (pokedex) => {
    addToPokedex({
      id,
      name,
      img,
      life,
      atk,
      shild,
      speed,
      type,
      type2,
      pokedexId: pokedex.id,
    });
    setDropdownVisible(false); // Fecha o dropdown após a seleção
  };

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Descrição" />
        <div className="card-body container" style={{ paddingTop: "0px" }}>
          <div className="row">
            <div className="col">
              <p
                className="card-text text-start"
                style={{
                  fontWeight: "100",
                  textTransform: "capitalize",
                  fontSize: "12px",
                }}
              >
                #00{id}
              </p>
              <p
                className="card-title text-start"
                style={{
                  fontWeight: "900",
                  textTransform: "capitalize",
                  fontSize: "20px",
                }}
              >
                {name}
              </p>
              <p
                className="card-text text-start"
                style={{
                  fontWeight: "200",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                {type}
              </p>
              <p
                className="card-text text-start"
                style={{
                  fontWeight: "200",
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              >
                {type2}
              </p>
            </div>
            <div className="col" style={{ paddingLeft: "0px" }}>
              <p className="card-text text-start">Vida: {life}</p>
              <p className="card-text text-start">Ataque: {atk}</p>
              <p className="card-text text-start">Defesa: {shild}</p>
              <p className="card-text text-start">Velocidade: {speed}</p>
              <div
                className="d-flex justify-content-end"
                style={{ marginTop: "20px" }}
              >
                <button
                  className="btn btn-primary"
                  onClick={handleAddToPokedex}
                >
                  +
                </button>
              </div>
              {dropdownVisible && (
                <div
                  className="dropdown-menu show"
                  style={{ position: "absolute", zIndex: "1000" }}
                >
                  {db.map(
                    (
                      pokedex // Alterado para usar db
                    ) => (
                      <button
                        key={pokedex.id}
                        className="dropdown-item"
                        onClick={() => handleSelectPokedex(pokedex)}
                      >
                        {pokedex.name}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
