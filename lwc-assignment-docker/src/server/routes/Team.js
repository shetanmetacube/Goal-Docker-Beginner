var express = require('express');
var router = express.Router();
var TeamController = require('../controllers/teamController');


//define routes
router.post('/addteam', TeamController.addTeam)
router.get('/getteamlist', TeamController.getTeamList)
router.get('/:id', TeamController.getMembersByTeamId)

module.exports = router;