const ProfessorModel = require('../models/professor.model');


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
}

module.exports = ProfessorService;