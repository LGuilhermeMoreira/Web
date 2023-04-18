const FilhoC = (props) => {
    function calculaMedia(array) {
      let media = 0;
      for (let i = 0; i < array.length; i++) {
        media += array[i];
      }
      return media / array.length;
    }
  
    function atualizaSetMedia() {
      props.setMedia((x) => calculaMedia(props.array));
    }
  
    return (
      <>
        <button onClick={atualizaSetMedia}>Calcula Media</button>
      </>
    );
  };
  export default FilhoC;
  