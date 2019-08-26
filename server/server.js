const express = require('express');
// const ctrl = require('./ctrl');
const app = express();
// const expressGraphQL = require('express-graphql');
// const schema = require('./schema')
const db = require('../models/database')


app.use(express.json());

// app.use('/graphql', expressGraphQL({
//   schema:schema,
//   graphiql:true
// }))

const SERVER_PORT = 4444;
// const CONNECTION_STRING = 'postgres://bkxjlhvvhnyhpo:aafc98d11829938e26dd420704bf6148c393ce417460db49a096255a4107a32d@ec2-107-22-238-217.compute-1.amazonaws.com:5432/d2qju7bb8j2cl0?ssl=true'



db.authenticate()
  .then(() => console.log('db connected'))
  .catch(err => console.log('error', err));

// app.post('/auth/register', async (req, res) => {
//   const {
//     email,
//     first_name,
//     last_name,
//     password
// } = req.body
// const now = Date.now
// const db = req.app.get("db")
// console.log('pooopoopop')
// const [newUser] = await db.register_user([
//     email,
//     first_name,
//     last_name,
//     password,
//     now
// ]).catch(err => console.log(222, err))
// res.status(200).send({
//     loggedIn: true,
// }).catch(err => console.log(666, err))
// });

app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`));
