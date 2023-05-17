import { useEffect,useState } from "react";

const Questao02 = () => {
    
    //funcao que troca a imagem pela a de costa
    function changeImage(){
        if(flag){
            setImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
            setFlag(!flag)

        }else{
            setImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
            setFlag(!flag)
        }
    }
    // criando a flag e e um variavel estado image
    const [flag,setFlag] = useState(false);
    const [image,setImage] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")



    return(
        <div>
            <h1 style={{color: "red"}}>Questao 02</h1>
            <img src = {image} style={
                {
                    width: "300px",
                }
            }/>
            {/*butão pra trocar o valor da variavel estado image*/}
            <button onClick={changeImage}>turn around</button>

        
        </div>
    )

}

export default Questao02;