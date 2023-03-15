const express = require('express');
const connectDB = require('./config/db');

const app = express();

const cors = require('cors');
app.use(cors());
connectDB();

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('API R'));  

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/sub', require('./routes/api/sub'));



const PORT =  process.env.PORT || 8000;

app.listen(PORT, () => console.log({PORT}));