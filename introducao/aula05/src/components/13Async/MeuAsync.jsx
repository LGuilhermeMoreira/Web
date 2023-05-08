import { useEffect } from "react";

const MinhaPromessa = new Promise((resolve, reject) => {
  const x = false;
  if (x) resolve({ msg: "Deu certo!" });
  else reject({ msg: "Deu errado!" });
});

const MeuAsync = () => {
  useEffect(() => {
    //getPromessaComAsync()
    //getPromessaComThen();
  }, []);

  function getPromessaComThen() {
    MinhaPromessa.then((data) => {
      console.log(data.msg);
    }).catch((data) => {
      console.log(data.msg);
    });
  }

  async function getPromessaComAsync() {
    try {
      const data = await MinhaPromessa;
      console.log(data.msg);
    } catch (error) {
      console.log(error.msg);
    }
  }

  return (
    <>
      <h1>Testando meu async</h1>
    </>
  );
};

export default MeuAsync;
