import { useDispatch } from "react-redux";
import { decrementar } from "./slices/idSlices";

const BotaoDecrementar = (props) => {
  const dispatch = useDispatch()
    return (
    <>
      <button onClick={() => dispatch(decrementar())}>ID - 1</button>
    </>
  );
};

export default BotaoDecrementar;
