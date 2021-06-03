const express = require('express');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8808;
app.use(cors());
app.use(express.json());
app.use(session({
    resave: false, 
    saveUninitialized: true, 
    secret: '73kj%7Jk&k@#sdjf', 
    cookie: { maxAge: 60000},
    store: new MemoryStore({
        checkPeriod: 60000
    })
}));

const userRoutes = require('./app/router/user');
const sessionRoutes = require('./app/router/session');

app.use('/api/user', userRoutes);
app.use('/api/session', sessionRoutes);

mongoose.connect('mongodb://localhost/nodeApiTest', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then( () =>{
    console.log('Successfully connected to database');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}).catch(err => {
    console.log(`failed to connect to the database ${err}`);
})
