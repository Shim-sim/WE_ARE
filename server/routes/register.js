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





module.exports = router;