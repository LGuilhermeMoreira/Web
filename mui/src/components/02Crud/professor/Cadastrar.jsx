// import { TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, FormLabel, FormGroup, FormControlLabel, Checkbox } from "@mui/material"
// import { useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"


// const Cadastrar = () => {

//     const [nome, setNome] = useState("")
//     const [curso, setCurso] = useState("")
//     const [titulacao, setTitulacao] = useState("GRAD")
//     const [ai,setAi] = useState({es:false,al:false,ds:false,mc:false})

//     const {es,al,ds,mc} = ai

//     function handleSubmit(event) {
    
//         event.preventDefault()
//         const professor = {nome,curso,titulacao,ai}
        
//         axios.post("http://localhost:3001/professores/cadastrar",professor).
//         then((response) => {
//             alert(`Professor ${response.data.nome} cadastrado com sucesso!`)
//         }).
//         catch((error) => {console.log(error)})
    
//     }

//     function handleCheckbox(event){
//         setAi({
//             ...ai,
//             [event.target.name]:event.target.checked,
//         })
//     }

//     return (
//         <>
//             <Typography variant="h5" fontWeight="bold">
//                 Cadastrar Professor
//             </Typography>
//             <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//             >
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="nome"
//                     name="nome"
//                     label="Nome Completo"
//                     autoFocus
//                     onChange={(event) => setNome(event.target.value)}
//                 />
//                 <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="curso"
//                     name="curso"
//                     label="Curso"
//                     onChange={(event) => setCurso(event.target.value)}
//                 />

//                 <FormControl fullWidth sx={{ mt: 2 }}>
//                     <InputLabel id="select-tit-label">Titulação</InputLabel>
//                     <Select
//                         labelId="select-tit-label"
//                         label="Titulação"
//                         value={titulacao}
//                         onChange={(event) => setTitulacao(event.target.value)}
//                     >
//                         <MenuItem value="GRAD">Graduação</MenuItem>
//                         <MenuItem value="MEST">Mestrado</MenuItem>
//                         <MenuItem value="DOUT">Doutorado</MenuItem>
//                     </Select>
//                 </FormControl>

//                 <FormControl
//                     component="fieldset"
//                     variant="standard"
//                     sx={{ mt: 2, ml: 2 }}
//                 >
//                     <FormLabel
//                         component="legend"
//                         sx={{ fontSize: 12, mb: 2 }}
//                     >
//                         Áreas de Interesse
//                     </FormLabel>
//                     <FormGroup>
//                         <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software" />
//                         <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox}/>} label="Algoritmos" />
//                         <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software" />
//                         <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox}/>} label="Matemática Computacional" />
//                     </FormGroup>
//                 </FormControl>

//                 <Box sx={{display:"flex",justifyContent:"center"}}>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         sx={{ my: 3 }}
//                     >
//                         Cadastrar
//                     </Button>
//                 </Box>

//             </Box>
//         </>
//     )
// }
// export default Cadastrar

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Cadastrar = () => {

    const [nome,setNome] = useState("") //textfield
    const [curso,setCurso] = useState("") //textfield
    const [titulacao,setTitulacao] = useState("GRAD") //select
    const [ai,setAi] = useState({cg:false,mc:false,al:false,es:false}) //checkbox
    let { cg, mc, al, es} = ai
    let navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        const professor = {nome,curso,titulacao,ai}
        axios.post("http://localhost:3001/professores/cadastrar",professor)
        .then((response)=>{
            alert(`Professor ID ${response.data._id} adicionado com sucesso!`)
            navigate("/listarProfessor")
        })
        .catch(error=>console.log(error))
        /*console.log(nome)
        console.log(curso)
        console.log(titulacao)
        console.log(ai)*/
    }

    function handleCheckbox(event){
        setAi({
            ...ai,
            [event.target.name]: event.target.checked 
        })
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
            </Typography>
            <Box
                sx={{width:"80%"}}
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
                    onChange={(event)=>setNome(event.target.value)}
                    
                />
                <TextField 
                    required
                    fullWidth
                    margin="normal"
                    label="Curso"

                    id="curso"
                    name="curso"
                    onChange={(event)=>setCurso(event.target.value)}
                    
                />

                <FormControl sx={{marginTop:2, width:"100%"}} required>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event)=>setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{mt:2,ml:2}} component="fieldset" variant="standard">
                    <FormLabel component="legend" sx={{fontSize:12,mb:2}}>Áreas de Interesse</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={cg} name="cg" onClick={handleCheckbox} />} label="Computação Gráfica" />
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onClick={handleCheckbox}/>} label="Matemática Computacional" />
                        <FormControlLabel control={<Checkbox checked={al} name="al" onClick={handleCheckbox}/>} label="Algoritmos" />
                        <FormControlLabel control={<Checkbox checked={es} name="es" onClick={handleCheckbox}/>} label="Engenharia de Software"/>
                    </FormGroup>
                </FormControl>

                <Box sx={{display:"flex",justifyContent:"center",mt:2}}>
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
export default Cadastrar