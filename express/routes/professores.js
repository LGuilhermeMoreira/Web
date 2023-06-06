const { request, response } = require('../app');
const professorService = require('../services/professor.service');
var express = require('express');
var router = express.Router();


router.get(
    "/listar", (request,response,next) => {
        response.json(professorService.list());
    }
)

router.post(
    "/cadastrar",(request, response, next) => {
        const professor = professorService.register(request.body);
        response.json(professor);
    }
)

router.get("/recuperar/:id", (request, response, next) => {
    const professor = professorService.retrive(request.params.id);
    if(professor) response.json(professor);
    else response.status(404).json({message: "Professor não encontrado"});
});

router.put("/atualizar/:id", (request, response, next) => {
    const professor = professorService.update(request.params.id, request.body);
    if(professor) response.json(professor);
    else response.status(404).json({message: "Professor não encontrado"});
});

router.delete("/remover/:id", (request, response, next) => {
    const professor = professorService.delete(request.params.id);
    if(professor) response.json({"sucess": true});
    else response.status(404).json({message: "Professor não encontrado"});
});


module.exports = router;