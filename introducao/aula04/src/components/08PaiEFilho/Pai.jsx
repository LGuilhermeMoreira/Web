import { useState } from "react";
import Filho from "./Filho";

const Pai = () => {
  const mensagemDoFilho = (msg) => {
    alert("Meu filho disse: " + msg);
    setNome("Mariano");
  };

  const [nome, setNome] = useState();

  return (
    <div>
      <h1>Pai {nome}</h1>
      <Filho falaComPai={mensagemDoFilho} />
    </div>
  );
};

export default Pai;
