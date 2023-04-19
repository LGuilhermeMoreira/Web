const { useEffect } = require("react")

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        //resolve = deu certo
        // reject = deu errado
        console.log("iniciando a logica")
        setTimeout(
            () => {
                console.log("logica terminada")
                const myInt = Math.floor(Math.random()*10+1)
                console.log(myInt)
                //
                // poderia retornar um objeto ex: ({numero: myInt, msg "..."})
                if(myInt % 2== 0) resolve("deu certo!");
                else reject("deu errado!")
            }, 5000
        )


    }
)

const MeuGet = (url) => {
    console.log(url)
    return MinhaPromessa
}

const MinhaPromise = () => {
    useEffect(
        () =>{MeuGet("https://fake")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    }, []
    )

    return (
        <>
        <h1>Testando a Promise !</h1>
        </>
    )
}

export default MinhaPromise