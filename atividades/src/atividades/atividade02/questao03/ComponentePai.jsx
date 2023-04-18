import Neto from "./ComponenteNeto";
import { useContext } from "react";
import MyContext from "./MyContext";

const Pai = () => {
  let num = useContext(MyContext);
  return (
    <dir>
      <h1>Pokemon numero {num + 1}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          num + 1
        }.png`}
      />
      <Neto />
    </dir>
  );
};

export default Pai;
