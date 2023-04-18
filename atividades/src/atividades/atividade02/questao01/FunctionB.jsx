import MyContext from "./MyContext";
import { useContext } from "react";

//legacy way
/*const FunctionB = () => {
  return (
    <MyContext.Consumer>
    {({ bkgB }) => (
      <div>
      <h1 style={{ backgroundColor: bkgB }}>Function B</h1>
      </div>
      )}
      </MyContext.Consumer>
      );
    };*/

//usual way
const FunctionB = () => {
  const { bkgB } = useContext(MyContext);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgB }}>Function B</h1>
    </div>
  );
};

export default FunctionB;
