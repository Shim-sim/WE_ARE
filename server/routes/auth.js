const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");

//=================================
//             Auth
//=================================



router.get('/', auth, (req, res) => {
	res.status(200).json({
		_id: req.user._id,
		isAuth: true,
		email: req.user.email,
		name: req.user.name,
		nickname: req.user.nickname,
		entranceYear: req.user.entranceYear,
		armyUnit: req.user.armyUnit
	})
})







module.exports = router;