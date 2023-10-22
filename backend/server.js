const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');
const UserModel = require('./models/User');
const TicketModel = require('./models/Ticket');
const app = express();
app.use(express.json());
app.use(cors());
const paymentRoutes=require('./models/payment')
dotenv.config();
mongoose.connect('mongodb://127.0.0.1:27017/Online_Movie_Ticket_Booking_System');

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("User not found");
      }
    });
});

app.get('/getUsers', (req, res) => {
    const { email } = req.query;
    UserModel.find({ email })
      .then(users => {
        res.json(users);
      })
      .catch(err => res.json(err));
  });
  
app.post('/register', (req, res) => {
  const { email } = req.body;
  UserModel.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) {
        res.status(400).json({ error: "Email is already taken" });
      } else {
        UserModel.create(req.body)
          .then(user => {
            res.json(user);
          })
          .catch(err => {
            res.status(500).json({ error: "Registration failed" });
          });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Server error" });
    });
});

app.post('/saveTickets', (req, res) => {
    TicketModel.create(req.body)
    .then(ticket => {
        res.json(ticket);
      })
    .catch(err => console.log(err));
});

app.use("/payment/",paymentRoutes);

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
