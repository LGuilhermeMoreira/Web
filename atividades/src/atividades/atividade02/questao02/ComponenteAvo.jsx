import Pai from "./ComponentePai";
import MyContext from "./MyContext";

const Avo = () => {
  let num = 1;
  return (
    <MyContext.Provider value={num}>
      <div>
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
