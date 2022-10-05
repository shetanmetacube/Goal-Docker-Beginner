import { LightningElement, track} from 'lwc';
import axios  from 'axios'
import CONSTANT from '../../config/cosntant';
 

export default class Team extends LightningElement {
    @track teamName = '';
    @track teams = [];
    @track teamMemberList = [];


    async connectedCallback(){
        let getTeamData = await this.getTeamList();
        if(getTeamData.length){
            for(let obj of getTeamData){
                if(obj){
                    this.teams.push({
                        id: obj.teamId,
                        name: obj.name
                    });
                }
            }
             //get all member list
            await this.getMemberList();
        }else{
            console.log('No Team Found!');
        }
        
    }   

    handleTeamInput(event){
        this.teamName = event.target.value;
    }

   async addNewTeam () {
        var teamVal = this.teamName;
        if(teamVal){
            //let $thisRef = this;
            axios.post(CONSTANT.SERVER_URL+ '/team/addteam', {
                name: teamVal
            })
            .then(async (response) => {
                if(response.data.status === 200){                    
                    this.teamName = '';
                    //fetch teams list
                    let teamData = await this.getTeamList();
                    if(teamData.length){
                        this.teams = [];
                        for(let obj of teamData){
                            if(obj){
                                this.teams.push({
                                    id: obj.teamId,
                                    name: obj.name
                                });
                            }
                        }
                    }
                }else{
                    console.log(response.data.msg);
                }                   
            })
            .catch(function (error) {
                console.log(error);
            });          
            
        }else{
            alert('Please enter team name first!');
        }   
    }

  
    getTeamList = async () => {
        try {
            let getData = await axios.get(CONSTANT.SERVER_URL + '/team/getteamlist');
            return getData.data.teamList;
        } catch (error) {
            return error; 
        }              
    }

    getMemberList = async () => {
        try {
            let getData = await axios.get(CONSTANT.SERVER_URL + '/member/getmemberlist');
            this.teamMemberList = [];
            if(getData.data.memberList.length){
                for(let obj of getData.data.memberList){
                    if(obj){
                        let objref = {
                            team: obj.teamInfo.name,
                            name: obj.memberName,
                            skills: obj.skills
                        };
                        this.teamMemberList.push(objref);
                    }
                }
            }
            return getData.data.memberList;
        } catch (error) {
            return error; 
        }              
    }

    handleMemberInTeam(event){
        var $thisRef = this;
        axios.post(CONSTANT.SERVER_URL + '/member/addmember', event.detail)
        .then(async function (response) {
            await $thisRef.getMemberList();                              
        })
        .catch(function (error) {
            console.log(error);
        });         
    }
    
    async handleFilter(event){
        let teamId = event.detail; 
        if(teamId === 'All'){
            await this.getMemberList();
        }else{
            await this.findMemberByTeamId(teamId);
        }  
    }

    findMemberByTeamId = async (teamId) => {
        try {
            let getData = await axios.get(CONSTANT.SERVER_URL + '/team/'+ teamId);
            this.teamMemberList = [];
            if(getData.data.memberList.length){
                for(let obj of getData.data.memberList){
                    if(obj){
                        let objref = {
                            team: obj.teamInfo.name,
                            name: obj.memberName,
                            skills: obj.skills
                        };
                        this.teamMemberList.push(objref);
                    }
                }
            }
            return getData.data.memberList;
        } catch (error) {
            return error; 
        }              
    }
}
