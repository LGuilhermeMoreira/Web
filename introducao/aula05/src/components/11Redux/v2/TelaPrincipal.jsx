import Image from "./Imagem";
import BotaoDecrementar from "./BotaoDecrementar";
import BotaoIncrementa from "./BotaoIncrementar";

const TelaPrincipal = () => {
  
    return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <Image />
            </td>
          </tr>
          <tr>
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
