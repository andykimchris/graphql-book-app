const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.connect(
"mongodb+srv://andrew:iDbCZo5AwABuBD3Q@graphql-books.ty1qd.mongodb.net/<dbname>?retryWrites=true&w=majority",
{ useUnifiedTopology: true, useNewUrlParser: true },
)
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB Atlas");
})

const app = express();

app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, _ => {
    console.log('Listening');
})