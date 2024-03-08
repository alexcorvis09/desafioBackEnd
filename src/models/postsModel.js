const mongoose = require('mongoose')

const postsSchema = new mongoose.Schema ({
    user:{
        type:String,
        required:true,
    }, 
    title:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true, 
    }
},
{
    timestamps:true
})

const Posts = mongoose.model('posts', postsSchema)

module.exports= Posts
