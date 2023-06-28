import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const EditarAluno = () => {

    let { id } = useParams()
    const navigate = useNavigate()

    /*const professores = [
        { id: 0, nome: "Vito Corleone", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:false,es:true}},
        { id: 1, nome: "Michael Corleone", curso: "DD", titulacao: "GRAD", ai:{cg:false,mc:true,al:false,es:false} },
        { id: 2, nome: "Luca Brasi", curso: "SI", titulacao: "MEST", ai:{cg:true,mc:false,al:true,es:false} },
        { id: 3, nome: "Kay Adams", curso: "SI", titulacao: "DOUT", ai:{cg:false,mc:true,al:false,es:false} },
        { id: 4, nome: "Peter Clemenza", curso: "CC", titulacao: "MEST", ai:{cg:false,mc:true,al:true,es:false} }
    ]*/

    /*function getProfessorById(id) {
        for(let i=0;i<professores.length;i++)
            if(id == professores[i].id) return professores[i]
        return null
    }*/

    const [nome, setNome] = useState("") //textfield
    const [curso, setCurso] = useState("") //textfield
    const [ira, setIra] = useState(0) //slider

    //como [] está vazio, o useEffect funciona como um construtor!
    useEffect(
        () => {
            //let professor = getProfessorById(id)
            axios.get(`http://localhost:3001/alunos/recuperar/${id}`)
                .then(
                    (response) => {
                        setNome(response.data.nome)
                        setCurso(response.data.curso)
                        setIra(response.data.ira)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        []
    )

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = { nome, curso, ira }
        axios.put(`http://localhost:3001/alunos/atualizar/${id}`, aluno)
            .then((response) => {
                navigate("/listarAluno")
            })
            .catch(error => console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno {id}
            </Typography>
            <Box
                sx={{ width: "80%" }}
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    required
                    fullWidth
                    autoFocus
                    margin="normal"
                    label="Nome Completo"
                    value={nome}

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"
                    value={curso}

                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}

                />

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="IRA"
                    value={ira}

                    id="ira"
                    name="ira"
                    onChange={(event) => setIra(event.target.value)}

                />

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Atualizar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default EditarAluno