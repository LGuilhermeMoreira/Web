const { model } = require("mongoose")

class AlunoModels {
    constructor (id, nome, curso, ira){
        this.id = id
        this.nome = nome
        this.curso = curso
        this.ira = ira
    }
}

module.exports = AlunoModels