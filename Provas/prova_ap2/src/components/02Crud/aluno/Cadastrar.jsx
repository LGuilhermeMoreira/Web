
//import { Box, Button, TextField, Typography, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, } from "@mui/material"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CadastrarAluno = () => {

    const [nome, setNome] = useState("") //textfield
    const [curso, setCurso] = useState("") //textfield
    const [ira, setIra] = useState(0) //textfiel
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const aluno = { nome, curso, ira }
        axios.post("http://localhost:3001/alunos/cadastrar", aluno)
            .then((response) => {
                alert(`aluno ${response.data.nome} adicionado com sucesso!`)
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
                Cadastrar Aluno
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

                    id="nome"
                    name="nome"
                    onChange={(event) => setNome(event.target.value)}

                />
                {/* <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"

                    id="curso"
                    name="curso"
                    onChange={(event) => setCurso(event.target.value)}

                /> */}


                <FormControl sx={{marginTop:2, width:"100%"}} required>
                    <InputLabel id="select-tit-label">Cursos</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Cursos"
                        value={curso}
                        onChange={(event)=>setCurso(event.target.value)}
                    >
                        <MenuItem value="CC">Ciência da Computação</MenuItem>
                        <MenuItem value="SI">Sistema de Informação</MenuItem>
                        <MenuItem value="EC">Engenharia de Computação</MenuItem>
                        <MenuItem value="ES">Engenharia de Software</MenuItem>
                        <MenuItem value="DD">Design Digital</MenuItem>
                        <MenuItem value="RC">Rede de Computadores</MenuItem>
                    </Select>
                </FormControl>

                {/* <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Curso</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cc} name="cc" onClick={handleCheckbox} />} label="Ciencia da Computacao" />
                        <FormControlLabel control={<Checkbox checked={si} name="si" onClick={handleCheckbox} />} label="Sistema de Informacao" />
                        <FormControlLabel control={<Checkbox checked={ec} name="ec" onClick={handleCheckbox} />} label="Engenharia de Computacao" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onClick={handleCheckbox} />} label="Engenharia de Software" />
                        <FormControlLabel control={<Checkbox checked={dd} name="dd" onClick={handleCheckbox} />} label="Dising Digital" />
                        <FormControlLabel control={<Checkbox checked={rc} name="rc" onClick={handleCheckbox} />} label="Rede de Computadores" />
                    </FormGroup>
                </FormControl> */}

                <TextField
                    required
                    fullWidth
                    margin="normal"
                    label="IRA"

                    id="ira"
                    name="IRA"
                    onChange={(event) => setIra(event.target.value)}

                />

                {/* <FormControl sx={{ mt: 2, ml: 2 }} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{ fontSize: 12, mb: 2 }}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onClick={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onClick={handleCheckbox} />} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onClick={handleCheckbox} />} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onClick={handleCheckbox} />} label="Engenharia de Software" />
                    </FormGroup>
                </FormControl> */}

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Cadastrar
                    </Button>
                </Box>
            </Box>
        </>
    )
}
export default CadastrarAluno