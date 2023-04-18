import FunctionB from "./FunctionB";
import FunctionC from "./FunctionC";
import CorContexto from "./MyContext";

//v0 - com props
/*const FunctionA = () => {
  const cor = "red";

  return (
    <div>
      <h1 style={{ backgroundColor: cor }}>Function A</h1>
      <FunctionB cor={cor} />
      <FunctionC cor={cor} />
    </div>
  );
};*/

const FunctionA = () => {
  const obj = { color: "purple", bkgColor: "yellow", name: "guigui" };

  return (
    <CorContexto.Provider value={obj}>
      <div>
        <h1 style={{ color: obj.color }}>Function A </h1>
        <FunctionB />
        <FunctionC />
      </div>
    </CorContexto.Provider>
  );
};

export default FunctionA;
