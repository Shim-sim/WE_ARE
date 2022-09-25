const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()
const path = require("path")
const config = require('./config/key')
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
const userRouter = require('./routes/user')
const boardRouter = require('./routes/board')
const commentRouter = require('./routes/comment')
const authRouter = require('./routes/auth')

const mongoose = require('mongoose')
 mongoose.connect(config.mongoURI)
	.then(() => console.log('몽고db 잘연결됨'))
	.catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
	origin: 'https://we-are-client.run.goorm.io',
	credentials: true
}))

if(process.env.NODE_ENV === "production") {
	app.use(express.static('build'));
	
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"))
	});
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter);
app.use('/user', userRouter)
app.use('/board', boardRouter);
app.use('/comment', commentRouter)
app.use('/auth', authRouter);


app.get('/hello', (req, res) => res.send('서버연결됨'))




const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})