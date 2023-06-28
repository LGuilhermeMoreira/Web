import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const Listar = () => {

   const [alunos, setAlunos] = useState([])

   useEffect(
    ()=>{
        axios.get("http://localhost:3001/alunos/listar")
        .then(
            (response)=>{
                //console.log(response)

                // let listaAlunoMaiorMedia = []
                // for(let i=0;i<response.data.length;i++){
                //     if(response.data[i].ira > media())
                //         listaAlunoMaiorMedia.push(response.data[i])
                // }
                //setAlunos(response.data.filter(aluno => aluno.ira > media()))

                //* Carregando todos os alunos
                setAlunos(response.data)
            }
        )
        .catch(error=>console.log(error))
    }
    ,
    []
    )

    function deleteAlunoById(id) {
        if(window.confirm("Deseja Excluir ? " + id)){
            //alert("Professor " + id + " excluído com sucesso!")
            axios.delete(`http://localhost:3001/alunos/remover/${id}`)
            .then((response)=>{
                const resultado = alunos.filter(alu => alu._id != id)
                setAlunos(resultado)
            })
            .catch(error=>console.log(error))
        }
    }

    const media = () => {
        let soma = 0
        for(let i=0;i<alunos.length;i++)
            soma += alunos[i].ira
        return soma/alunos.length
    }

    let id = 0

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Alunos com média acima da média geral
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    id++
                                    
                                       if(aluno.ira > media()){
                                        return (
                                            <StyledTableRow key={id}>
                                                
                                                <StyledTableCell>{aluno.nome}</StyledTableCell>
                                                <StyledTableCell>{aluno.curso}</StyledTableCell>
                                                <StyledTableCell>{aluno.ira}</StyledTableCell>
                                                
                                            </StyledTableRow>
                                        )
                                    }
                                }
                                
                            )

                        }
                    </TableBody>
                </Table>
            </TableContainer>
        
        </>
    )
}
export default Listar