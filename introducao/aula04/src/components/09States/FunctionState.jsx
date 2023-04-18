import { useEffect, useState } from "react";

const FunctionStates = () => {
  const [cont, setCont] = useState(0);
  const [ehPar, setEhPar] = useState(true);

  useEffect(() => {
    if (cont % 2 === 0) setEhPar(true);
    else setEhPar(false);
  }, [cont]);
  return (
    <>
      <h1>Contador: {cont}</h1>
      <h1>É Par: {"" + ehPar}</h1>
      <button onClick={() => setCont(cont + 1)}>+</button>
    </>
  );
};

export default FunctionStates;
