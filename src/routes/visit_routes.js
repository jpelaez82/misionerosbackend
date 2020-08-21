let express = require('express');
let router = express.Router();
let visit = require('../../Models/visit');

router.post('/', function(req, res, next) {
    const vmision = new visit({
        Nombre: req.body.Nombre,
        Email: req.body.Email,
        Celular: req.body.Celular,
        Plataforma: req.body.Plataforma
    });

    vmision.save(function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.get('/', function(req, res, next) {
    visit.find(function(err, docs) {
        if (err) {
            res.json(err);
        } else {
            res.json(docs);
        }
    });
});

module.exports = router;



module.exports = router;
