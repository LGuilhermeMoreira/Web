const Filho = (props) => {
    const actionButton = () => {
      props.falaComPai("qual foi veio");
    };
    return (
      <div>
        <h1>Filho</h1>
        <button onClick={actionButton}>enviar messagem pro pai</button>
      </div>
    );
  };
  export default Filho;
  