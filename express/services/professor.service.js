const ProfessorModel = require('../models/professor.models');


const professores = [
    {id: 0,nome: "Kaynan Cavalo", curso: "CC", titulacao: "GRAD", ai : {es:false,al:false,ds:false,mc:false}},
    {id: 1,nome: "Thigas", curso: "EC", titulacao: "MEST", ai : {es:false,al:false,ds:false,mc:false}},
    {id: 2,nome: "Titilio", curso: "CC", titulacao: "DOUT", ai : {es:false,al:false,ds:false,mc:false}},
    {id: 3,nome: "Vivi", curso: "CC", titulacao: "DOUT", ai : {es:false,al:false,ds:false,mc:false}},
];

let id  = 5;

class ProfessorService {
    static list (){
        return professores;
    }

    static register (data){
        let professor = new ProfessorModel(id++, data.nome, data.curso, data.titulacao, data.ai);
        professores.push(professor);
        return professor;
    }

    static retrive(id){
        for(let i = 0; i < professores.length; i++){
            if(professores[i].id == id) return professores[i]
        }
        return null
    }

    static delete(id){
        for(let i = 0; i < professores.length; i++){
            if(professores[i].id == id) {
                professores.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static update(id, data){
        for(let i = 0; i < professores.length; i++){
            if(professores[i].id == id) {
                professores[i].nome = data.nome;
                professores[i].curso = data.curso;
                professores[i].titulacao = data.titulacao;
                professores[i].ai = data.ai;
                return professores[i];
            }
        }
        return null;
    }
}


module.exports = ProfessorService;