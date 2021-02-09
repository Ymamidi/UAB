const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();



app.use(cors());

mongoose.connect('mongodb+srv://MG:Yashu!1996@cluster0.nudtm.mongodb.net/test');
mongoose.connection.once('open',() => {
    console.log('connected to database')
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});