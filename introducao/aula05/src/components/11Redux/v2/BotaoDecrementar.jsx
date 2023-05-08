import { useDispatch } from "react-redux";
import { decrementar, decrementarValor } from "./slices/idSlices";

const BotaoDecrementar = (props) => {
  const dispatch = useDispatch()
    return (
    <>
      <button onClick={() => dispatch(decrementar())}>ID - 1</button>
      <button onClick = {() => dispatch(decrementarValor(10))}>ID - 10</button>
    </>
  );
};

export default BotaoDecrementar;
