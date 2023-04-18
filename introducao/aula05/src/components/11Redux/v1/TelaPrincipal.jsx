import Image from "./Imagem";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementa from "./BotaoIncrementar";
import { useState } from "react";
const TelaPrincipal = () => {
  
    const [id,setId] = useState(1);
    const incrementar = () =>
        setId((prev) => (prev + 1) > 151 ? prev = prev : prev = prev+1)
    const decrementar = () =>
        setId((prev) => (prev - 1) < 1 ? prev = prev : prev = prev-1)
  
    return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Image id = {id}/>
            </td>
          </tr>
          <tr>
            <td>
              <BotaoDecrementar decrementar = {decrementar}/>
            </td>
            <td>
              <BotaoIncrementa incrementar = {incrementar}/>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TelaPrincipal;
