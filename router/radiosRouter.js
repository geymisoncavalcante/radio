const express = require('express');
const radiosController = require('../controllers/radiosController');
const pool = require('../database/database');
const router = express.Router();



//      /radios
router.get('/', radiosController.radios);

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    const sql = 'select id_tombamento, te.descricao as te_descricao, tes.descricao as tes_descricao, tf.descricao as tf_descricao, tmf.descricao as tmf_descricao, tmr.descricao as tmr_descricao, tm.descricao as tm_descricao, ts.descricao as ts_descricao, tt.descricao as tt_descricao, serie, og.sigla as ome, atualizacao from radio.cad_radios as cr left join radio.tab_equipamentos as te on (te.id_equipamento = cr.id_equipamento) left join radio.tab_estacoes as tes on (tes.id_estacao = cr.id_estacao) left join radio.tab_frequencias as tf on (tf.id_frequencia = cr.id_frequencia) left join radio.tab_marcafontes as tmf on (tmf.id_mfonte = cr.id_mfonte) left join radio.tab_marcaradios as tmr on (tmr.id_mradio = cr.id_mradio)  left join radio.tab_modeloradios as tm on (tm.id_modeloradio = cr.id_modeloradio) left join radio.tab_status as ts on (ts.id_status = cr.id_status) left join radio.tab_tecnologias as tt on (tt.id_tecnologia = cr.id_tecnologia) left join mrh.organizacao as og on (og.id_organizacao = cr.id_ome) where id_tombamento = $1'
    pool.query(sql, [id], (err, result)=> {
        if(err){
            throw err
        }else{
            //res.json(result.rows)
            res.render('pages/editRadios', { IdRadios: result.rows})
        }
    })
})

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