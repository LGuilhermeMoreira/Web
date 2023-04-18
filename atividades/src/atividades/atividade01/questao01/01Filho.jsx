const Filho = ({ altura, peso }) => {
    function exibeResultado(imc) {
      if (imc < 18) {
        return <h3>Abaixo do peso</h3>;
      } else if (imc > 25) {
        return <h3>Acima do peso</h3>;
      } else {
        return <h3>Peso ideal</h3>;
      }
    }
  
    const IMC = (peso, altura) => peso / (altura * altura);
  
    return (
      <div>
        <h1>Seu IMC é {IMC(peso, altura).toFixed(2)}</h1>
        {exibeResultado(IMC(peso, altura))}
      </div>
    );
  };
  
  export default Filho;
  