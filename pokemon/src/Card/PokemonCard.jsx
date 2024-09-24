import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";

const PokemonCard = ({ id, name, img, life, atk, shild, speed, type, type2}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Descrição da Imagem" />
        <div
          className="card-body container"
          style={{
            paddingTop: "0px",
          }}
        >
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
            <div
              className="col"
              style={{
                paddingLeft: "0px",
              }}
            >
              <p className="card-text text-start">Vida: {life}</p>
              <p className="card-text text-start">Ataque: {atk}</p>
              <p className="card-text text-start">Defesa: {shild}</p>
              <p className="card-text text-start">Velocidade: {speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
