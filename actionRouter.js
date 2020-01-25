const router = require('express').Router()
const db = require('./data/helpers/actionModel')
const projectDb = require('./data/helpers/projectModel')

router.get('/:id', (req,res) => {
    db.get(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get actions'})
        })
})

router.post('/', validateProjectId, (req,res) => {
    db.insert(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to add action'})
        })
})

router.put('/:id', (req,res) => {
    db.update(req.params.id, req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to edit action'})
        })
})

router.delete('/:id', (req,res) => {
    db.remove(req.params.id)
        .then(item => {
            res.status(201).json({message: `removed ${item} records`})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to delete action'})
        })
})

function validateProjectId(req,res,next) {
    projectDb.get(req.body.project_id)
        .then(item => {
            item ?
            next() :
            res.status(404).json({message: 'project id could not be found'})
        })

}

module.exports = router