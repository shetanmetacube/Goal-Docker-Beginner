const TeamModel = require('../models/Team');
const MemberModel = require('../models/Member');


exports.addTeam = async function(req, res){
     
    var requestData = req.body; //get data from request
    if(requestData.name){
        //await Team.sync({ force: true });
        await TeamModel.create({ name:  requestData.name }).then(resp=>{
            res.json({
                status : 200,
                msg: "Team Added Successfully!"
            })
        }).catch(err=>{
            res.json({
                status : 401,
                msg: err
            })
        });
    }else{
        res.json({
            status : 401,
            msg: 'Please fill the required information!'
        })   
    }
}

exports.getTeamList = async function(req, res){
    try {
        const getTeamList =  await TeamModel.findAll();  
        res.json({
            status: 200,
            teamList: getTeamList        
        })  
    } catch (error) {
        res.json({
            status: 401,
            msg: "Something Went Wrong"        
        })
    }       
}     

exports.getMembersByTeamId = async function(req, res){
    if(req.params.id){
        let teamId = req.params.id;
        try {
            const getMemberList =  await MemberModel.findAll(
                { 
                    where: { teamId: teamId },
                    attributes:['memberId', 'teamId','memberName','skills'],
                    include:[
                        {
                            model: TeamModel,
                            as: "teamInfo",
                            attributes: ['name']
                        }
                    ]
                }
                );
            res.json({
                status: 200,
                memberList: getMemberList        
            })  
        } catch (error) {
            res.json({
                status: 401,
                 msg: "Something Went Wrong"     
            })
        }
    }else{
        res.json({
            status: 401,
            msg: "Please fill the required information!"        
        })    
    }
}