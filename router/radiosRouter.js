const express = require('express');
const radiosController = require('../controllers/radiosController')
const router = express.Router();



//      /radios
router.get('/', radiosController.radios);

router.get('/cadRadios', async function(req, res) {
    let mradios = await radiosController.getMradios()
    let modeloradios = await radiosController.getModelo()
    let marcafontes = await radiosController.getMfonte()
    let equipamentos = await radiosController.getEquipamento()
    let estacoes = await radiosController.getEstacao()
    let frequencias = await radiosController.getFrequencia()
    let tecnologias = await radiosController.getTecnologia()
    let status = await radiosController.getStatus()
    let omes = await radiosController.getOme()

    //res.json(omes)
   res.render('pages/cadRadios', {mradios, modeloradios, marcafontes, equipamentos, estacoes, frequencias, tecnologias, status, omes})
});

router.post('/insertRadios', radiosController.insertRadios)






module.exports = router;