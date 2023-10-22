const mongoose= require('mongoose')
const TicketSchema=new mongoose.Schema({
    moviename:String,
    email:String,
    timing:String,
    quality:String,
    screen:String,
    language:String,
    ticketCount:String, 
})
const TicketModel=mongoose.model("Tickets",TicketSchema)
module.exports=TicketModel;