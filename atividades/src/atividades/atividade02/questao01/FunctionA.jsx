import FunctionB from "./FunctionB";
import FunctionC from "./FunctionC";
import MyContext from "./MyContext";

const FunctionA = () => {
  const cores = { bkgA: "green", bkgB: "red", bkgC: "yellow", bkgD: "blue" };
  return (
    <MyContext.Provider value={cores}>
      <div>
        <h1 style={{ backgroundColor: cores.bkgA }}>FunctionA</h1>
        <FunctionB />
        <FunctionC />
      </div>
    </MyContext.Provider>
  );
};

export default FunctionA;
