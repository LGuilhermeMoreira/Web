//import FunctionA from "./components/03Hierarquia/FunctionA";
import { Supermercado, Legume, Bebida, Fruta } from "./components/05Children";
import "./App.css";
//import { Body, Head, Footer } from "./components/04MultiplosComponents";
//import * as Comp from "./components/04MultiplosComponents";

/*export default function App() {
  return (
    <div className="App">
      <FunctionA />
    </div>
  );
}*/

//v1
/*export default function App() {
  return (
    <div className="App">
      <Head />
      <Body />
      <Footer />
    </div>
  );
}*/

//v2
/*export default function App() {
  return (
    <div className="App">
      <Comp.Head />
      <Comp.Body />
      <Comp.Footer />
    </div>
  );
}*/

export default function App() {
  return (
    <div className="App" style={{ backgroundColor: "purple", color: "white" }}>
      <Supermercado nome="Sao geraldo">
        <Legume nome="batata" />
        <Bebida nome="cachaça" />
        <Fruta nome="pera" />
      </Supermercado>
    </div>
  );
}
