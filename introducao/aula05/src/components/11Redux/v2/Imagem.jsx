import { useSelector } from "react-redux";

const Image = () => {
  const id = useSelector((state) => state.id.value);
  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
        alt=""
        style={{ width: "400px", backgroundColor:"grey" }}
      />
    </>
  );
};

export default Image;
