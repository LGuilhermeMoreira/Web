import { useSelector } from "react-redux";

const ImageBack = () => {
  const id = useSelector((state) => state.id.value);
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`}
        alt=""
        style={{ width: "400px" }}
      />
    </>
  );
};

export default ImageBack;
