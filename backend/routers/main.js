const router = require('express').Router()

router.route('/').get((req, res)=>{
    let ProjectsList = require('../models/projects.modul')

    ProjectsList.find()
        .then(users => {
            res.json(users)
        })
        .catch(e => res.status(400).json(e))
})

module.exports = router