const FilhoB = (props) => {
    function calculaMenor(array) {
      let menor = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i] < menor) menor = array[i];
      }
      return menor;
    }
  
    function atualizaSetMenor() {
      props.setMenor((x) => calculaMenor(props.array));
    }
  
    return (
      <>
        <button onClick={atualizaSetMenor}>Calcula Menor</button>
      </>
    );
  };
  export default FilhoB;
  