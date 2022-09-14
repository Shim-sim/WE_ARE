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
	Board.findOne({ userFrom : req.body.userFrom })
		.sort({ createdAt: -1})
		.exec((err, boards) => {
			if(err) return res.status(400).send(err)
			return res.status(200).json({ success: true, boards})
	})
})







module.exports = router;