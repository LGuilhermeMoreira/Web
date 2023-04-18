const Calculadora = () => {
    const somar = (x, y) => x + y;
    const diminuir = (x, y) => x - y;
    const multiplicar = (x, y) => x * y;
    const dividir = (x, y) => x / y;
    const chamadivisao = (funcDividir, x, y) => dividir(x, y);
    const potencia = (x, y) => x ** y;
  
    return (
      <div>
        <h1>Operações com os numeros 2 e 4</h1>
        <h2>2 + 4 = {somar(2, 4)}</h2>
        <h2>2 - 4 = {diminuir(2, 4)}</h2>
        <h2>2 * 4 = {multiplicar(2, 4)}</h2>
        <h2>2 / 4 = {chamadivisao(dividir, 2, 4)}</h2>
        <h2> 2 ^ 4 = {potencia(2, 4)}</h2>
      </div>
    );
  };
  
  export default Calculadora;
  