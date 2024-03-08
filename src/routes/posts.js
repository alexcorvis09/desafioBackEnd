const express = require('express')
const router = express.Router()
// const authMiddlewares = require('../middlewares/auth')
const Posts = require('../models/postsModel')
const User = require('../models/usersModel')


router.get('/', async (req, res)=>{
    try{
        const posts = await Posts.find()
        res.send({message: 'Posts', data:posts})
    }
    catch (error){
            res.status(400).send({message:error})
    }
})

router.get('/search/:id', async(req,res)=>{
    try{
        const {id}= req.params
        const post = await Posts.find({_id:id})
        res.send({message:'All messages', data: post})
    }
    catch(error){
        res.status(400).send({message:error})
    }
})

router.post('/', async (req, res)=>{
    try{
        let post = req.body
        const newPost = await Posts.create(post)
        await newPost.save()
        res.status(201).send({data:newPost})
        }
    catch (error){
        res.status(400).send({message:error})
    }
})

router.put('/edit/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const post = req.body
        const posts = await Posts.findByIdAndUpdate(id, post, {returnOriginal:false})
        res.send({message:'Post modified', data:posts})
    }
    catch(error){
        res.status(400).send({message:error})
    }
})

router.delete('/delete/:id', async (req, res)=>{
    try{
        const{id} = req.params
        await Posts.findByIdAndDelete(id)
        res.send({message:"Message deleted"})
    }
    catch(error){
        res.status(400).send({message:error})
    }
})

module.exports = router