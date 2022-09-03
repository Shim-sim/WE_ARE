const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config/key');



const registerRouter = require('./routes/register');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
 mongoose.connect(config.mongoURI)
	.then(() => console.log('몽고db 잘연결됨'))
	.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/register', registerRouter)
app.use('/user', userRouter)
















const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})