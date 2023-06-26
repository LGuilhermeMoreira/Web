import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyMenuV1 from "./MeuMenuV1"
import { Container } from "@mui/material"
//páginas do Professor
import CadastrarProfessor from "./professor/Cadastrar"
import ListarProfessor from "./professor/Listar"
import EditarProfessor from "./professor/Editar"
import CadastrarAluno from "./aluno/Cadastrar"
import ListarAluno from "./aluno/Listar"
import EditarAluno from "./aluno/Editar"

const MainPage = () => {
    return (
        <BrowserRouter>
            <MyMenuV1 />
            <Container sx={{mt:4, display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Routes>
                    {/*Rostas professores */}
                    <Route path="cadastrarProfessor" element={<CadastrarProfessor />}/>
                    <Route path="listarProfessor" element={<ListarProfessor />}/>
                    <Route path="editarProfessor/:id" element={<EditarProfessor />}/>
                    {/*Rostas alunos */}
                    <Route path="CadastrarAluno" element={<CadastrarAluno />}/>
                    <Route path="listarAluno" element={<ListarAluno />}/>
                    <Route path="editarAluno" element={<EditarAluno />}/>
                    
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage