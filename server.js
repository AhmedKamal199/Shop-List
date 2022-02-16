const express = require('express')
const mongo = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const items = require('./routes/api/items')

const app = express();

// BodyParser midleware

app.use(bodyParser.json())

// db config

const db = require('./config/key').mongoURI
console.log(db)


// connect mongoose

mongo
    .connect(db)
    .then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err));

// u

app.use('/api/items', items);

const port = process.env.PORT || 5000
 
// Serve static assets if in production

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build', 'index.html'))
    })
}

 app.listen(port, ()=> console.log(`Server started on port ${port}`)) 