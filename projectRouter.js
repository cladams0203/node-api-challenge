const router = require('express').Router()
const db = require('./data/helpers/projectModel')

router.get('/', (req,res) => {
    db.getAll()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get all projects'})
        })
})

router.get('/:id', (req,res) => {
    db.get(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get project'})
        })
})

router.post('/', (req,res) => {
    db.insert(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to add project'})
        })
})

router.put('/:id', (req,res) => {
    db.update(req.params.id, req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to edit project'})
        })
})

router.delete('/:id', (req,res) => {
    db.remove(req.params.id)
        .then(item => {
            res.status(201).json({message: `removed ${item} records`})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to delete project'})
        })
})

router.get('/:id/actions', (req,res) => {
    db.getProjectActions(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get project actions'})
        })
})

module.exports = router