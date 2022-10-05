var express = require('express');
var router = express.Router();
var MemberController = require('../controllers/memberController');

//define routes
router.post('/addmember', MemberController.addMember)
router.get('/getmemberlist', MemberController.getMemberList)

module.exports = router;