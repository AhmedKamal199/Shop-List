const express = require('express')
const mongo = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const config = require('config')

const app = express();

// BodyParser midleware

app.use(bodyParser.json())

// db config

const db = config.get('mongoURI')

 
// connect mongoose

mongo
    .connect(db,{
        useNewUrlParser:true,
        // useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));

// u

app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000
 
// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}

 app.listen(port, ()=> console.log(`Server started on port ${port}`)) 