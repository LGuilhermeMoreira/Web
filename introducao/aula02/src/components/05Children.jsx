import { Children, cloneElement } from "react";

//v0
/*const Supermercado = ({ nome, children }) => (
  <div>
    <h1>Supermercado {nome}</h1>
    {children}
  </div>
);*/

//v1
/*const Supermercado = ({ nome, children }) => (
  <div>
    <h1>Supermercado {nome}</h1>
    {Children.map(children, (child) => (
      <div style={{ backgroundColor: "red", color: "green" }}>{child}</div>
    ))}
  </div>
);*/

const Supermercado = ({ nome, children }) => (
  <div>
    <h1>Supermercado {nome}</h1>
    {Children.map(children, (child) =>
      cloneElement(child, { supermercado: nome })
    )}
  </div>
);

//v0 - Legume
/*const Legume = ({ nome }) => (
  <div>
    <h3>Legume {nome}</h3>
  </div>
);*/

//v1 - Legume
const Legume = ({ nome, supermercado }) => (
  <div>
    <h3>
      Legume {nome} do Supermecado {supermercado}
    </h3>
  </div>
);

const Bebida = ({ nome }) => (
  <div>
    <h3>Bebida {nome}</h3>
  </div>
);

const Fruta = ({ nome }) => (
  <div>
    <h3>Fruta {nome}</h3>
  </div>
);

export { Supermercado, Legume, Bebida, Fruta };
