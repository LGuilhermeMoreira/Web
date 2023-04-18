//v1
/*
const MyProps = (props) => {
  function rederizarMeuNome() {
    return <spam> Guilherme </spam>;
  }

  return (
    <div>
      <h1>Meu nome é: {rederizarMeuNome()} </h1>
      <h1>Meu nome com props é: {props.nome}</h1>
    </div>
  );
};*/

//v2 -  com desconstrução do props
const MyProps = ({ nome, curso, idade }) => (
    <div>
      <h1>Meu nome é {nome}</h1>
      <h2>Meu curso é {curso}</h2>
      <h3>Minha idade é {idade}</h3>
    </div>
  );
  
  export default MyProps;
  