const router = require('express').Router()
const db = require('./data/helpers/actionModel')

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

router.post('/', (req,res) => {
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

module.exports = router