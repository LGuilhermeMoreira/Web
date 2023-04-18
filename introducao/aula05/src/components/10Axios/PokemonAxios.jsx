import axios from "axios";
import { useState, useEffect } from "react";

const PokemonAxios = () => {
  const [nome, setNome] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setNome(response.data.name);
        setImage(response.data.sprites.front_shiny);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <h3>Nome: shiny {nome}</h3>
      <h3>ID: {id}</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={image} style={{ width: "300px" }} />
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={() => {
                  setId((x) => (x - 1 < 1 ? 1 : x - 1));
                }}
              >
                Id-1
              </button>

              <button
                onClick={() => {
                  setId((x) => x + 1);
                }}
              >
                Id+1
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default PokemonAxios;
