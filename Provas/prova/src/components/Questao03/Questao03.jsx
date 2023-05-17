import { useState } from "react";

const Questao03 = () => {
    fetch(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let maiorPopulacao = data[0]
        let menorPopulacao = data[0];

        for(let i = 0; i < data.length; i++){
            if(data[i].population > maiorPopulacao.population){
                maiorPopulacao = data[i]
            }
            if(data[i].population < menorPopulacao.population){
                menorPopulacao = data[i];
            }
        }

        setMaiorCidade(maiorPopulacao);
        setMenorCidade(menorPopulacao);

    })
    .catch((error) => console.log(error));

    const [maiorCidade, setMaiorCidade] = useState({});
    const [menorCidade, setMenorCidade] = useState({});

  return <>
    <h1  style={{color: "blue"}}>Questão 3</h1>
    <p>País com maior população: {maiorCidade.capital}</p>
    <p>País com menor população: {menorCidade.capital}</p>
  </>;
};

export default Questao03;