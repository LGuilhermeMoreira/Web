const SaveData = () => {
    //criando funcao que salava os "alunos" criados em local e session
    const saveData = () => {
      //criando alunos
      const alunoLocal = { nome: "guigui", curso: "CC" };
      const alunoSession = { nome: "Guilherme", curso: "Cien. Comp" };
  
      //salvando alunos
      localStorage.setItem("aluno01", JSON.stringify(alunoLocal));
      sessionStorage.setItem("aluno02", JSON.stringify(alunoSession));
    };
    //retorno jsx
    return (
      <div>
        <h1>Saving Data...</h1>
        {saveData()}
        <LoadData />
      </div>
    );
  };
  
  const LoadData = () => {
    //criando funcao que carrega os alunos ja criados na funcao saveData
    const loadData = () => {
      const alunoCarregadoLocal = JSON.parse(localStorage.getItem("aluno01"));
      const alunoCarregadoSession = JSON.parse(sessionStorage.getItem("aluno02"));
      return (
        <>
          <h2 style={{ color: "red" }}>LocalStorage</h2>
          <h3>nome : {alunoCarregadoLocal.nome}</h3>
          <h3>curso : {alunoCarregadoLocal.curso}</h3>
          <h2 style={{ color: "red" }}>SessionStorage</h2>
          <h3>nome : {alunoCarregadoSession.nome}</h3>
          <h3>curso : {alunoCarregadoSession.curso}</h3>
        </>
      );
    };
  
    return (
      <>
        <h1>Loading Data...</h1>
        {loadData()}
      </>
    );
  };
  
  export default SaveData;
  