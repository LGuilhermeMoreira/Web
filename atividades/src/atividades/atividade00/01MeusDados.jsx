/* v1
function MeusDados({ nome, universidade, curso }) {
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <h1>Curso: {curso}</h1>
      <h1>Universidade: {universidade}</h1>
    </div>
  );
}
*/

/* v2
const MeusDados = ({nome,universidade,curso}) => {
  return(
    <div>
      <h1>Nome: {nome}</h1>
      <h1>Curso: {curso}</h1>
      <h1>Universidade: {universidade}</h1>
    </div>
  );
}
*/

//v3
const MeusDados = ({ nome, universidade, curso }) => (
    <div>
      <h1 style={{ color: "red", backgroundColor: "black" }}>Nome: {nome}</h1>
      <h1 style={{ color: "grey", backgroundColor: "green" }}>Curso: {curso}</h1>
      <h1 style={{ color: "blue", backgroundColor: "pink" }}>
        Universidade: {universidade}
      </h1>
    </div>
  );
  
  /* v4
  
  class MeusDados extend React.Components{
    render(){
      return(
        <div>
        <h1>Nome: Guilherme</h1>
        <h1>Curso: CC</h1>
        <h1>Universidade: UFC</h1>
    </div>
      );
    }
  }
  */
  
  export default MeusDados;
  