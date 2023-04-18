import { useDispatch } from "react-redux";
import { incrementar } from "./slices/idSlices";


const BotaoIncrementa = (props) => {
  const dispatch = useDispatch()
    return (
    <>
      <button onClick={() => dispatch(incrementar())}>ID + 1</button>
    </>
  );
};
export default BotaoIncrementa;
