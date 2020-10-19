const express=require('express');
const Card=require('../models/Card');
const router=express.Router();

router.post('/list', (req, res)=>{
    console.log(req.body)
    Card.find(req.body)
    .then(data=>{
        newData={
            code: 10001,
            data: data,
            message: 'success'
        }
        return res.json(newData)
    })
    .catch(err=>res.status(404).json({nofound: 'no data founded'}))
})

router.post('/create', (req, res)=>{
    Card.create(req.body)
    .then(data=>{
        res.json({msg: `created`})
    })
    .catch(err => res.status(400).json({error: 'unable to create this item'}))
})

router.get('/:id', (req, res)=>{
    Card.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>console.log(err))
})

router.delete('/:id', (req, res)=>{
    console.log(req.params.id)
    Card.findByIdAndDelete(req.params.id)
    .then(data=>res.json({msg:'deleted'}))
    .catch(err=>console.log('err', err))
})

router.put('/:id', (req, res)=>{
    console.log(req.params.id);
    Card.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>res.json({msg: 'updated successfully'}))
    .catch(err=>console.log(err))
})

module.exports=router;