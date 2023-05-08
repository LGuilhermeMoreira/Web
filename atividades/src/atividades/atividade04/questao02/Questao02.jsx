import { useState, useEffect } from "react";

const MyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let myInt = Math.floor(Math.random() * 10) + 1;
    console.log(myInt);
    if (myInt !== 1 && myInt !== 2)
      resolve([
        { id: 1, nome: "deivid", ira: "8.9" },
        { id: 2, nome: "jeffin", ira: "8.9" },
        { id: 3, nome: "kaynan", ira: "8.9" },
      ]);
    else if (myInt === 1) {
      reject({ num: myInt, msg: "ERRO - erro de conexão" });
    } else {
      reject({ num: myInt, msg: "ERRO - erro de dados invalidos" });
    }
  }, 3000);
});

const MeuGet = (url) => MyPromise;

const MinhaPromisseJSX2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    MeuGet("https://Fake.org/ID")
      .then((response) => {
        setData(response);
      })
      .catch((erro) => {
        alert(JSON.stringify(erro));
      });
  }, []);

  return (
    <>
      {data.map((x) => {
        return (
          <>
            <h1>nome: {x.nome}</h1>
            <h1>ira: {x.ira}</h1>
          </>
        );
      })}
    </>
  );
};

export default MinhaPromisseJSX2;
