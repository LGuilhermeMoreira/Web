const professorService = require('../services/professor.service');
var express = require('express');
var router = express.Router();


router.get(
    "/listar", (request,response,next) => {
        response.json(professorService.list());
    }
)


module.exports = router;