import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './process.css'
import axios from "axios";

function Process() {
  const { amount, moviename, timing, quality, screen, language,email } = useParams();
  const [ticketCount, setTicketCount] = useState(1);

  const handleMinusClick = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePlusClick = () => {
    setTicketCount(ticketCount + 1);
  };
  const initPayment = (data)=>{
    const options={key:"rzp_test_wBcFX7ELGaCqLk",amount:data.amount,currency:data.currency,moviename:moviename,handler:async(response)=>{
      try{
        const verifyUrl="http://localhost:3001/payment/verify";
        const {data}=await axios.post(verifyUrl,response)
        console.log(data);
      }
      catch(err){
        console.log(err);
      }
    },
    theme:{
      color:"#3399cc"
    }
  }
  const rzp1=new window.Razorpay(options);
  rzp1.open();
  };
  const handleSave = async(e) => {
    // try{
    //   const orderUrl="http://localhost:3001/payment/orders";
    //   const {data}=await axios.post(orderUrl,{amount:(ticketCount*amount)})
    //   console.log(data);
    //   initPayment(data.data);
    // }catch(err) {
    //   console.log(err);
    // }
    axios.post('http://localhost:3001/saveTickets',{moviename, timing, quality, screen, language,ticketCount,email})
    .then(result => {
        console.log(result);
      })
    .catch(err => console.log(err));
  };
  return (
    <div className="process">
      <h2>Processing:</h2>
      <p>Amount: {amount}</p>
      <p>Movie Name: {moviename}</p>
      <p>Timing: {timing}</p>
      <p>Quality: {quality}</p>
      <p>Screen: {screen}</p>
      <p>Language: {language}</p>
      <div className="ticket-count">
        <div className="ticket-buttons">
          <button onClick={handleMinusClick}>-</button>
          <p>{ticketCount}</p>
          <button onClick={handlePlusClick}>+</button>
        </div>
      </div>
      <div className="save">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Process;
