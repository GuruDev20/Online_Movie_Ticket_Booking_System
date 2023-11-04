const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require('dotenv');
const UserModel = require('./models/User');
const TicketModel = require('./models/Ticket');
const multer = require('multer');
const app = express();
const path=require('path');
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(express.static('public'))
app.use("/", router);
const MovieModel = require('./models/Movie');
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
  
app.get('/getTickets', (req, res) => {
  const { email } = req.query;
  TicketModel.find({email})
  .then(tickets => {
      res.json(tickets);
    })
    .catch(err=>res.json(err))
})
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
app.get('/Tickets', (req, res) => {
  const { screen } = req.query;
  TicketModel.find({ screen })
    .then(tickets => {
      res.json(tickets);
    })
    .catch(err => res.json(err));
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/Images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  const { movieName, timing, screen, language, quality, amount } = req.body;

  MovieModel.create({
    image: req.file.filename,
    movieName,
    timing,
    screen,
    language,
    quality,
    amount,
  })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.get('/getImage', (req, res) => {
  MovieModel.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});

app.get('/getMovies', (req, res) => {
    MovieModel.find()
    .then((movies) => res.json(movies))
    .catch((err) => res.json(err));
});
router.delete('/delete-movie/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;
    await MovieModel.findByIdAndRemove(movieId);
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.put('/update-movie/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const updatedMovieData = req.body;

    const updatedMovie = await MovieModel.findByIdAndUpdate(movieId, updatedMovieData, { new: true });
    if (updatedMovie) {
      res.status(200).json(updatedMovie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
