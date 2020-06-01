const router = require('express').Router()

router.route('/').get((req, res)=>{
    let ProjectsList = require('../models/projects.modul')

    var query  = ProjectsList.where({ idProj: req.body.idProj });

    query.findOne(function (err, idProj) {
        if (err) return handleError(err);
        if (idProj) {
            return res.json(idProj)
        }
    });
})

module.exports = router