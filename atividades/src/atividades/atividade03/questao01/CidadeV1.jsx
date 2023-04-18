//import { useContext, useState } from "react";
import { useEffect, useState } from "react";
//import "./styles.css";
const VotacaoCidade = (props) => {
  const [cidadeOne, setCidadeOne] = useState(0);
  const [cidadeTwo, setCidadeTwo] = useState(0);
  const [cidadeThree, setCidadeThree] = useState(0);
  const [cidadeFour, setCidadeFour] = useState(0);

  const [plus, setPlus] = useState("");
  const [less, setLess] = useState("");

  useEffect(() => {
    // arrays com os votos e nomes da cidade
    let citiesArray = [cidadeOne, cidadeTwo, cidadeThree, cidadeFour];
    let nomes = [props.c1, props.c2, props.c3, props.c4];
    //variáveis de maior e menor
    let maior = citiesArray[0];
    let menor = citiesArray[0];
    for (let i = 0; i < citiesArray.length; i++) {
      if (citiesArray[i] > maior) maior = citiesArray[i];
      if (citiesArray[i] < menor) menor = citiesArray[i];
    }
    //zerando as variaveis estado
    setPlus("");
    setLess("");
    //for de definição
    for (let i = 0; i < nomes.length; i++) {
      if (citiesArray[i] === maior) setPlus((x) => x + " " + nomes[i]);
      if (citiesArray[i] === menor) setLess((x) => x + " " + nomes[i]);
    }
  }, [cidadeOne, cidadeTwo, cidadeThree, cidadeFour]);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>VOTACAO DAS CIDADES</h1>
      <h3 style={{ color: "blue" }}>
        {props.c1}: {cidadeOne}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c2}: {cidadeTwo}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c3}: {cidadeThree}
      </h3>
      <h3 style={{ color: "blue" }}>
        {props.c4}: {cidadeFour}
      </h3>
      <button onClick={() => setCidadeOne((x) => x + 1)}>{props.c1}</button>
      <button onClick={() => setCidadeTwo((x) => x + 1)}>{props.c2}</button>
      <button onClick={() => setCidadeThree((x) => x + 1)}>{props.c3}</button>
      <button onClick={() => setCidadeFour((x) => x + 1)}>{props.c4}</button>
      <h2 style={{ color: "brown" }}>Mais Votada: {plus}</h2>
      <h2 style={{ color: "brown" }}>Menos votada: {less}</h2>
    </div>
  );
};

export default VotacaoCidade;
