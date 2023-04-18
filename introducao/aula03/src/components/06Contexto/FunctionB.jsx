import CorContexto from "./MyContext";

//v0 - com props
/*const FunctionB = (props) => (
  <div>
    <h1 style={{ backgroundColor: props.cor }}>Function B</h1>
  </div>
);*/

//v1 - legacy way
/*const FunctionB = () => (
  <CorContexto.Consumer>
    {(color) => {
      return (
        <div>
          <h1 style={{ backgroundColor: color }}>Function B</h1>
        </div>
      );
    }}
  </CorContexto.Consumer>
);*/

//v1 - legacy way
const FunctionB = () => (
  <CorContexto.Consumer>
    {({ bkgColor, color }) => {
      return (
        <div>
          <h1 style={{ backgroundColor: bkgColor, color: color }}>
            Function B
          </h1>
        </div>
      );
    }}
  </CorContexto.Consumer>
);

export default FunctionB;
