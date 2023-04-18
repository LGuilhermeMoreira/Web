const FilhoA = (props) => {
    function calculaMaior(array) {
      let maior = array[1];
      for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) maior = array[i];
      }
      return maior;
    }
  
    function atualizaSetMaior() {
      props.setMaior((x) => calculaMaior(props.array));
    }
  
    return (
      <>
        <button onClick={atualizaSetMaior}>Calcula Maior</button>
      </>
    );
  };
  
  export default FilhoA;
  