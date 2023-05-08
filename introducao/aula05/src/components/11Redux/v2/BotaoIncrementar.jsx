import { useDispatch } from "react-redux";
import { incrementar, incrementarValor } from "./slices/idSlices";


const BotaoIncrementa = (props) => {
  const dispatch = useDispatch()
    return (
    <>
      <button onClick={() => dispatch(incrementar())}>ID + 1</button>
      <button onClick={() => dispatch(incrementarValor(10))}>ID + 10</button>
    </>
  );
};
export default BotaoIncrementa;
