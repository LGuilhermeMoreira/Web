import Image from "./Imagem";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementa from "./BotaoIncrementar";
import ImageBack from "./ImagemBack";

const TelaPrincipal = () => {
  
    return (
    <>
      <table>
        <tbody>
          <tr style={{backgroundColor: "gray"}}>
            <td>
              <Image />
            </td>
            <td>
              <ImageBack />
            </td>
          </tr>
          <tr style={{backgroundColor: "pink"}}> 
            <td>
              <BotaoDecrementar />
            </td>
            <td>
              <BotaoIncrementa />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TelaPrincipal;
