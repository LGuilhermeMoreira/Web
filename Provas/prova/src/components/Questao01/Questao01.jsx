import { useEffect, useState } from "react"

function Questao01X(){

    // aray para pegar a media
    const aluno = [
        {nome: "Siclano", notas: {ap1 : 5, ap2: 4.5}},
        {nome: "Fulano",notas: {ap1 : 7.3, ap2: 9.2}},
        {nome: "Beltrano", notas: {ap1 : 5.7, ap2: 3.5}}
    ]

    //vetor de objetos com o nome e a media
    const [media, setMedia] = useState([])
    
    //Questao01Y({aluno,setMedia})

    return(
        <>
            {/*passando para componente Questao01Y para ser calculado a media e */}
            <Questao01Y aluno={aluno} setMedia={setMedia}/>
            <h1>Questao 01</h1>
            {/*Imprimindo o aluno com maior media*/}
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
    
    //funcao criada para calcular a media
    function media(ap1,ap2){
        return (ap1+ap2)/2
    }
    
    // calculado a media e atribuindo a um vetor um objeto {nome : "nome" , media : media}
    useEffect(() => {
        props.aluno.map((aluno) => {
            vetor.push({nome: aluno.nome, media: media(aluno.notas.ap1,aluno.notas.ap2)})
        })
    }, [props.aluno])
    
    props.setMedia(vetor)



    return null


}

export default Questao01X