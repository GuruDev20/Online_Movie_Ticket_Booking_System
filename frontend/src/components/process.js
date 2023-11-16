import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import processcss from './process.module.css';
import axios from "axios";

function Process() {
  const { amount, moviename, timing, quality, screen, language, email } = useParams();
  const [ticketCount, setTicketCount] = useState(1);
  const history = useHistory(); 
  const [amountvalue, setamountvalue] = useState('')
  const handleMinusClick = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const handlePlusClick = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleSave = async (e) => {
    const total=parseInt(amount)*ticketCount;
    setamountvalue(total);
    var options={
      key:"rzp_test_D6uvdHaGMJkfge",
      key_secret:"9ndBhyXumgmepSEjHigyA1sH",
      amount: total*100,
      currency:"INR",
      name:"MOVIE_TICKET_BOOKING",
      description:"for testing purpose",
      handler:function(response){
        alert(response.razorpay_payment_id);
      },
      prefill:{
        name:"Dev",
        email:email,
        contact:"7904093855"
      },
      notes:{
        address:"Razorpay Corporate Office",
      },
      theme:{
        color:"#3399cc"
      }
    };
    var pay=new window.Razorpay(options);
    pay.open();
    axios.post('http://localhost:3001/saveTickets', { moviename, timing, quality, screen, language, ticketCount, email })
      .then(result => {
        console.log(result);
        history.push('/menu'); 
      })
      .catch(err => console.log(err));
  };

  return (
    <div className={processcss["process"]}>
      <h2>Processing:</h2>
      <p>Amount: {amount}</p>
      <p>Movie Name: {moviename}</p>
      <p>Timing: {timing}</p>
      <p>Quality: {quality}</p>
      <p>Screen: {screen}</p>
      <p>Language: {language}</p>
      <div className={processcss["ticket-count"]}>
        <div className={processcss["ticket-buttons"]}>
          <button onClick={handleMinusClick}>-</button>
          <p>{ticketCount}</p>
          <button onClick={handlePlusClick}>+</button>
        </div>
      </div>
      <div className={processcss["save"]}>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default Process;
