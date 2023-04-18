import { useEffect, useState } from "react";
//import "./styles.css";
const VotacaoCidade2 = (props) => {
  const [cidades, setCidades] = useState([
    { nome: props.c1, votos: 0 },
    { nome: props.c2, votos: 0 },
    { nome: props.c3, votos: 0 },
    { nome: props.c4, votos: 0 },
  ]);

  const [flag, setFlag] = useState(false);

  const votarNaCidadev0 = (text) => {
    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i].nome === text) cidades[i].votos = cidades[i].votos + 1;
    }
    setFlag((x) => !x);
  };

  const votarNaCidadev1 = (text) => {
    const index = cidades.findIndex((x) => x.nome === text);
    cidades[index].votos += 1;
    setFlag((x) => !x);
  };

  const votarNaCidadev2 = (text) => {
    const newArray = cidades.map((x) => {
      if (x.nome === text) {
        return { ...x, votos: x.votos + 1 };
      }
      return { ...x };
    });
    setCidades((x) => (x = newArray));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>VOTACAO DAS CIDADES</h1>
      <h3 style={{ color: "blue" }}>
        {props.c1}: {cidades[0].votos}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c2}: {cidades[1].votos}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c3}: {cidades[2].votos}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c4}: {cidades[3].votos}
      </h3>
      <table>
        <tr>
          <td>
            <button onClick={() => votarNaCidadev2(props.c1)}>
              {props.c1}
            </button>
          </td>
          <td>
            <button onClick={() => votarNaCidadev2(props.c2)}>
              {props.c2}
            </button>
          </td>
          <td>
            <button onClick={() => votarNaCidadev2(props.c3)}>
              {props.c3}
            </button>
          </td>
          <td>
            <button onClick={() => votarNaCidadev2(props.c4)}>
              {props.c4}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default VotacaoCidade2;
