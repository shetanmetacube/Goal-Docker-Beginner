const MemberModel = require('../models/Member');
const TeamModel = require('../models/Team');

exports.addMember = async function(req, res){
    var requestData = req.body; //get data from request
    if(requestData.team && requestData.name){
        //await Member.sync({ force: true });
        await MemberModel.create(
            { 
                teamId:  requestData.team,
                memberName:  requestData.name,
                skills:  requestData.skills,
            }).then(resp=>{
                res.json({
                    status : 200,
                    msg: "Member Added Successfully!"
                })
           }).catch(error=>{
               //here we can handle differetn type of error and their response
               let errText = 'Something Went Wrong';
                res.json({
                    status : 401,
                    msg : errText
                })
            });
    } else{
        res.json({
            status : 401,
            msg: 'Please fill the required information!'
        })    
    }
}

exports.getMemberList = async function(req, res){
    try {
        const getMemberList =  await MemberModel.findAll({
            attributes:['memberId', 'teamId','memberName','skills'],
            include:[
                {
                    model: TeamModel,
                    as: "teamInfo",
                    attributes: ['name']
                }
            ]
        });  
        res.json({
            status: 200,
            memberList: getMemberList        
        })  
    } catch (error) {
        res.json({
            status: 401,
            msg: error        
        })
    }
}