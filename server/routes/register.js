const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

//=================================
//             Register
//=================================


router.post('/', (req, res) => {
	const user = new User(req.body)
	
	user.save((err, user) => {
		if (err) return res.json({ success: false, err })
		return res.status(200).json({
			success: true
		})
	})
})

router.post('/checkId', (req, res) => {
	User.findOne({ id: req.body.id }, (err, user) => {
		if(!user) return res.status(200).json({
			success: true,
			message: '사용가능한 아이디 입니다.'
		})
		else return res.status(404).json({
			success: false,
			message: '중복 된 아이디 입니다.'
		})
	})
})

router.post('/checkId/:id', (req, res) => {
	User.findOne({ id: req.body.id }, (err, user) => {
		if(!user)	return res.status(200).send();
		else return res.status(404).json({
			success: false
		})
	})
})




module.exports = router;