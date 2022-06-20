
const express = require('express')
const testarBD = require('../controllers/testdata')
const router = express.Router()
router.use(express.json())

router.get('/administradores', testarBD.getAdministradores);
router.get("/alunos", testarBD.getAlunos);
router.get("/cursos", testarBD.getCursos);

module.exports = router;