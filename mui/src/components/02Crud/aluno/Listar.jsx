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


    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Listar alunos
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>NOME</StyledTableCell>
                            <StyledTableCell>CURSO</StyledTableCell>
                            <StyledTableCell>IRA</StyledTableCell>
                            <StyledTableCell align="center">AÇÕES</StyledTableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno._id}>
                                            <StyledTableCell>{aluno._id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.ira}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                    <IconButton aria-label="delete" color="error" onClick={()=>deleteAlunoById(aluno._id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton 
                                                        aria-label="edit" 
                                                        color="primary" 
                                                        sx={{ ml: 2 }}
                                                        component={Link}
                                                        to={`/editarAluno/${aluno._id}`}
                                                    >
                                                        <EditIcon />
                                                    </IconButton>
                                                </Box>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
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