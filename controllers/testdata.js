const pool = require('../config/database');

module.exports = {
    getAdministradores: async (req, res) => {

        pool.query('Select * from Administrador').then((testData) => {
            res.send(testData.rows);
        });
    },

    getAlunos: async (req, res) => {console.log("REQ")
        pool.query('Select * from aluno').then((testData) => {
            res.send(testData.rows);
        });
    },

    getCursos: async (req, res) => {
        pool.query('Select * from curso').then((testData) => {
            res.send(testData.rows);
        });
    },

    setCursos: async (req, res) => {

        const {curso, estado} = req.body;
        const query = "INSERT INTO curso(nome_curso,numero_de_anos,estado_curso) VALUES ($1,$2,$3) RETURNING id_curso,nome_curso,numero_de_anos,estado_curso"
        pool.query(query, [curso, 4, estado]).then((data) => {
            res.send(data.rows[0]);
        });
    },

    removeCursos: async (req, res)=>{
        const {id} = req.query;
        const query = "DELETE FROM curso WHERE id_curso=$1"
        pool.query(query, [id]).then((data) => {
           if(data.rowCount > 0){
               res.send(true);
           }else{
               res.send(false);
           }
        });
    }
}