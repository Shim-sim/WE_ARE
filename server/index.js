const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const config = require('./config/key');


const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
 mongoose.connect(config.mongoURI)
	.then(() => console.log('몽고db 잘연결됨'))
	.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter);
app.use('/user', userRouter)
app.use('/auth', authRouter);

















const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})