import FilhoA from "./FilhoA";
import FilhoB from "./FilhoB";
import FilhoC from "./FilhoC";

const { useState } = require("react");

const Pai = () => {
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);
  const [media, setMedia] = useState(0);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Calculo do Vetor</h1>

      <h2>Maior: {maior}</h2>
      <h2>Menor: {menor}</h2>
      <h2>Media: {media}</h2>
      <table>
        <tr>
          <FilhoA setMaior={setMaior} array={[1, 2, 3, 4, 5]} />
          <FilhoB setMenor={setMenor} array={[1, 2, 3, 4, 5]} />
          <FilhoC setMedia={setMedia} array={[1, 2, 3, 4, 5]} />
        </tr>
      </table>
    </>
  );
};

export default Pai;
