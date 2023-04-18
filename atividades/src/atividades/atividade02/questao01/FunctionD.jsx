import { useContext } from "react";
import MyContext from "./MyContext";

/*const FunctionD = () => {
  return (
    <MyContext.Consumer>
      {({ bkgD }) => (
        <div>
          <h1 style={{ backgroundColor: bkgD }}>Function C</h1>
          
        </div>
      )}
    </MyContext.Consumer>
  );
};*/

const FunctionD = () => {
  const { bkgD } = useContext(MyContext);
  return (
    <div>
      <h1 style={{ backgroundColor: bkgD }}>Function D</h1>
    </div>
  );
};

export default FunctionD;
