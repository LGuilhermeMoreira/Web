import CorContexto from "./MyContext";

//v0 - com props
/*const FunctionD = (props) => (
  <div>
    <h1 style={{ backgroundColor: props.cor }}>Function D</h1>
  </div>
);*/

//v1 - legacy way
/*const FunctionD = () => (
  <CorContexto.Consumer>
    {(cor) => (
      <div>
        <h1 style={{ backgroundColor: cor }}>Function D</h1>
      </div>
    )}
  </CorContexto.Consumer>
);*/

const FunctionD = () => (
  <CorContexto.Consumer>
    {({ color, bkgColor }) => (
      <div>
        <h1 style={{ backgroundColor: bkgColor, color: color }}>Function D</h1>
      </div>
    )}
  </CorContexto.Consumer>
);

export default FunctionD;
