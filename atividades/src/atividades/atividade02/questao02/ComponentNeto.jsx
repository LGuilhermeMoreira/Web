import { useContext } from "react";
import MyContext from "./MyContext";
const Neto = () => {
  let num = useContext(MyContext);
  return (
    <dir>
      <h1>Pokemon numero {num + 2}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          num + 2
        }.png`}
      />
    </dir>
  );
};

export default Neto;
