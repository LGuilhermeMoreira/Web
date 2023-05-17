import { useEffect, useState } from "react"

function Questao01X(){

    const aluno = [
        {nome: "Siclano", notas: {ap1 : 5, ap2: 4.5}},
        {nome: "Fulano",notas: {ap1 : 7.3, ap2: 9.2}},
        {nome: "Beltrano", notas: {ap1 : 5.7, ap2: 3.5}}
    ]

    const [media, setMedia] = useState([])
    
    //Questao01Y({aluno,setMedia})

    return(
        <>
            <Questao01Y aluno={aluno} setMedia={setMedia}/>
            <h1>Questao 01</h1>
            {media.map((media) => {
                if(media.media <= 5){
                    return <h2 style={{color: "green"}}>{media.nome} {media.media}</h2>
                }
            })}
        </>
    )
    
    
}


const Questao01Y = (props) => {
    let vetor = [];
    
    function media(ap1,ap2){
        return (ap1+ap2)/2
    }
    
    useEffect(() => {
        props.aluno.map((aluno) => {
            vetor.push({nome: aluno.nome, media: media(aluno.notas.ap1,aluno.notas.ap2)})
        })
    }, [props.aluno])
    
    props.setMedia(vetor)



    return null


}

export default Questao01X