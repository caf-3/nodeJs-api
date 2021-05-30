const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const api = require('./app/router/user');
const PORT = process.env.PORT || 8808;
app.use(cors());
app.use(express.json());

app.use('/api', api);

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
