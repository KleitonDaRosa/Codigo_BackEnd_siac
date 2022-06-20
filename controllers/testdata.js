const pool = require('../config/database');

module.exports = {
    getAdministradores: async (req, res) => {

        pool.query('Select * from Administrador').then((testData) => {
            res.send(testData.rows);
        });
    },

    getAlunos: async (req, res) => {
        pool.query('Select * from aluno').then((testData) => {
            res.send(testData.rows);
        });
    },

    getCursos: async (req, res) => {
        pool.query('Select * from curso').then((testData) => {
            res.send(testData.rows);
        });
    },

    criarCurso: async (req, res) => {
      const { curso,estado } = req.body;
      const query = "INSERT INTO curso(nome_curso,numero_de_anos,estado_curso) VALUES ($1,$2,$3) RETURNING id_curso,nome_curso,numero_de_anos,estado_curso"
      pool.query(query,[curso,4,estado] ).then((data) => {
          res.send(data.rows[0]);
      });
    }
}