import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { Link } from "react-router-dom"


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

    const Alunos = [
        { id: 0, nome: "Guilherme", curso: "SI", IRA: 9.5 },
        { id: 1, nome: "Pedro", curso: "DD", IRA: 8.3 },
        { id: 2, nome: "Fátima", curso: "CC", IRA: 8.2 },
        { id: 3, nome: "Lucas", curso: "SI", IRA: 7.1 },
        { id: 4, nome: "Betania", curso: "SI", IRA: 9.2 }
    ]

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
                            Alunos.map(
                                (aluno) => {
                                    return (
                                        <StyledTableRow key={aluno.id}>
                                            <StyledTableCell>{aluno.id}</StyledTableCell>
                                            <StyledTableCell>{aluno.nome}</StyledTableCell>
                                            <StyledTableCell>{aluno.curso}</StyledTableCell>
                                            <StyledTableCell>{aluno.IRA}</StyledTableCell>
                                            <StyledTableCell>
                                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                                    <IconButton aria-label="delete" color="error">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <IconButton 
                                                        aria-label="edit" 
                                                        color="primary" 
                                                        sx={{ ml: 2 }}
                                                        component={Link}
                                                        to={`/editarAluno/${aluno.id}`}
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