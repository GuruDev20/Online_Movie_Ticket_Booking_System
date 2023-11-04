const mongoose= require('mongoose')
const UpcomingSchema=new mongoose.Schema({
    image:String,
})
const UpcomingModel=mongoose.model("Available_shows",UpcomingSchema)
module.exports=UpcomingModel