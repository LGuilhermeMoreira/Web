const Image = (props) =>
<>
     <img src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.id}.png`} alt="" style={{width: "400px"}} />   
</>

export default Image