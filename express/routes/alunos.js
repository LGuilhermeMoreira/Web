const alunoServiceMongo = require('../services/aluno.service.mongo');

var express = require('express');
var router = express.Router();

router.get('/listar', (req, res, next) => {
    alunoServiceMongo.list(req, res);
});

router.post('/cadastrar', (req, res, next) => {
    alunoServiceMongo.register(req, res);
});

router.get('/recuperar/:id', (req, res, next) => {
    alunoServiceMongo.retrieve(req, res);
})

router.put('/atualizar/:id', (req, res, next) => {
    alunoServiceMongo.update(req, res);
});

router.delete('/remover/:id', (req, res, next) => {
    alunoServiceMongo.remove(req, res);
})

module.exports = router;