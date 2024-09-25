import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";
import { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";

const MyPokedex = () => {
    const [elements, setElements] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addElement = () => {
        if (inputValue.trim() !== '') {
            const newElement = {
                id: Date.now(),
                col1: inputValue,
            };
            setElements([...elements, newElement]);
            setInputValue('');
        }
    };

    const removeElement = (id) => {
        setElements(elements.filter(element => element.id !== id));
    };
    const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }
`;
    return (
        <div className="background-container"
            style={{
                overflowY: "auto",
            }}>
            <Header />
            <div
                className="text-center"
                style={{
                    backgroundColor: "#B0B0B0",
                    paddingTop: "80px",
                    marginLeft: "320px",
                    marginRight: "320px",
                    overflow: "auto",
                    height: "91.4%",
                }}
            >

                <h2
                    style={{
                        maxWidth: "420px",
                        margin: "0",
                        fontSize: "32px",
                        fontWeight: 800,
                        lineHeight: 1.4,
                    }}
                >
                    Minha Pokédex
                </h2>
                <div className="input-group mb-3 w-75 mx-auto">
                    <input type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nome Pokédex" className="form-control" aria-label="Nome Pokédex" aria-describedby="button-addon2"/>
                        <button onClick={addElement} className="btn btn-outline-secondary" type="button" id="button-addon2">Criar</button>
                        <button onClick={(e) => setInputValue('')} className="btn btn-outline-secondary" type="button">Cancelar</button> 
                </div>
                <Table>
                    <tbody>
                        {elements.map((element, index) => (
                            <tr key={index}>
                                <td>{element.col1}</td>
                                <td>
                                    <button onClick={() => removeElement(element.id)} className="btn btn-danger">Remover</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>

    );


}

export default MyPokedex;