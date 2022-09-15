const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const { Board } = require("../models/Board");
const { Comment } = require("../models/Comment");

//=================================
//             User
//=================================


router.get('/', auth, (req, res) => {
	User.findOne({ _id: req.user._id }, (err, user) => {
		if(user) return res.status(200).json({
			 id: req.user.id,
			 email: req.user.email,
			 nickname: req.user.nickname,
			 entranceYear: req.user.entranceYear
		})
		else return res.status(400).send()
	})
})

router.get('/profile', auth, (req, res) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if(user) return res.status(200).json({   
            id: req.user.id,
            nickname: req.user.nickname
        })
        else return res.status(404).send();
    })
})


router.post('/myBoard', (req, res) => {
	Board.find({ userFrom : req.body.userFrom })
		.sort({ createdAt: -1})
		.exec((err, boards) => {
			if(err) return res.status(400).send(err)
			return res.status(200).json({ success: true, boards})
	})
})


router.post('/update/nickname', auth, (req, res) => {
		User.findOneAndUpdate(
			{_id: req.body._id},
			{$set:{nickname: req.body.nickname}},
			{new: true},
			(err, user) => {
				if(user) return res.status(200).send()
				else return res.status(404).send
			}
		)
})

router.post('/withdrawal', auth, (req, res) => {
	User.findOne({ _id: req.body._id }, (err, user) => {
		user.comparePassword(req.body.password, (err, isMatch) => {
			if(!isMatch) return res.json({ success: false, message: '비밀번호가 틀렸습니다.' })
			else {
				Comment.deleteMany({ userFrom: user._id })
					.exec((err, result) => {
						return { success: true, result }
				})
				Board.deleteMany({ userFrom: user._id })
					.exec((err, result) => {
						return { success: true, result }
				})
				User.deleteOne({ _id: req.body._id }, (err, user) => {
					if(err) return res.status(400).send();
					else return res.json({ success: true })
				})
			}
		})
	})
})







module.exports = router;