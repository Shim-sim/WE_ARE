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
		if(!user) return res.status(200).send()
		return res.status(400).json({
			success: false
		})
	})
})





module.exports = router;