const mongoose= require('mongoose')
const MovieSchema=new mongoose.Schema({
    image:String,
    movieName:String,
    timing:String,
    screen:String,
    amount:String,
    quality:String,
    language:String
})
const MovieModel=mongoose.model("Available_shows",MovieSchema)
module.exports=MovieModel