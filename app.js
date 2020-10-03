const express = require('express');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

//mongo connection
mongoose.connect('mongodb://localhost:27017/MyDB');
mongoose.connection.once('open',() => {
    console.log('Connected to db');
});

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listing for request on port 4000');
})
