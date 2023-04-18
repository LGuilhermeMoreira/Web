import FunctionD from "./FunctionD";
import { useContext } from "react";
import MyContext from "./MyContext";

//legacy way
/*const FunctionC = () => {
  return (
    <MyContext.Consumer>
    {({ bkgC }) => (
      <div>
      <h1 style={{ backgroundColor: bkgC }}>Function C</h1>
      <FunctionD />
      </div>
      )}
      </MyContext.Consumer>
      );
    };*/

const FunctionC = () => {
  const { bkgC } = useContext(MyContext);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgC }}>Function C</h1>
      <FunctionD />
    </div>
  );
};

export default FunctionC;
