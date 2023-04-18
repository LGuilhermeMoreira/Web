import { useState } from "react";
import Pai from "./ComponentePai";
import MyContext from "./MyContext";

const Avo = () => {
  const [num, setNumero] = useState(1);
  return (
    <MyContext.Provider value={num}>
      <div>
        <button
          onClick={() => {
            //alert("clicaco!");
            //num = num + 1;
            //console.log(num);
            setNumero(num + 1);
          }}
        >
          Change Number
        </button>
        <h1>Pokemon numero {num}</h1>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
        />
        <Pai />
      </div>
    </MyContext.Provider>
  );
};

export default Avo;
