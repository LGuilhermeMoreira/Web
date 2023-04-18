import FunctionD from "./FunctionD";
import { useContext } from "react";
import CorContexto from "./MyContext";

//v0 - com props
/*const FunctionC = (props) => (
  <div>
    <h1>Function C</h1>
    <FunctionD cor={props.cor} />
  </div>
);*/

//v2 com useContext
const FunctionC = () => {
  const { color, bkgColor } = useContext(CorContexto);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgColor, color: color }}>Function C</h1>
      <FunctionD />
    </div>
  );
};

export default FunctionC;
