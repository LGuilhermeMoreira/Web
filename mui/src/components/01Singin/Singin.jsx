import { Container, Box, Typography, TextField, Button, Link } from "@mui/material"

const Signin = () => {

    return (
        <Container maxWidth="xs">
            <Box
                sx = {{
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    mt:10
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    id = "email"
                    label = "Endereço de e-mail"
                    name ="email"
                    autoComplete="email"
                    autoFocus 
                 />
                <TextField 
                    required
                    margin="normal"
                    fullWidth
                    name = "senha"
                    label = "Senha"
                    type = "password"
                    id = "senha"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx = {{mt:3,mb:2}}
                >
                    Sign In
                </Button>
                
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}
                    width="100%"
                >
                    <Link
                        href="#"
                        underline="none"
                        className="link"
                    >
                        Esqueceu a senha?
                    </Link>

                    <Link
                        href="#"
                        underline="none"
                        className="link" 
                    >
                        Não tem conta? Cadastre-se.
                    </Link>
                </Box>
            </Box>
        </Container>
    )

}

export default Signin