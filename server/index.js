const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {mongoose} = require('mongoose');
dotenv.config();
const app = express();
//database connection 
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connection established'))
.catch((err) => console.log('Database not connected',err))

//middleware 
app.use(express.json());



app.use('/',require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => {console.log(`listening on port ${port}`)});  