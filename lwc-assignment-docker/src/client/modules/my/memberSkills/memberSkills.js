import { LightningElement, track, api} from 'lwc';

export default class MemberSkills extends LightningElement {
    
    @api teams = [];
    @track formdata = {
        name : "",
        team : "",
        skills : ""
    }
       
    handleMemberInput(event){
        let fieldName = event.target.name;     
        this.formdata[fieldName] = event.target.value;
    }

    addNewMemberInTeam(){
        
        if(!this.formdata.name || !this.formdata.team || !this.formdata.skills){
            alert('Please fill all the fields!');
        }else{
            
            this.dispatchEvent(new CustomEvent('handleteam', { 
                                    detail:{
                                        id:  Math.floor(Math.random() * 35789),
                                        name: this.formdata.name, 
                                        team: this.formdata.team, 
                                        skills: this.formdata.skills
                                    }
                                }));
        }
    }
    

}
