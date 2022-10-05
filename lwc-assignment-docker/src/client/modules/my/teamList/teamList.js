import { LightningElement, api, track} from 'lwc';

export default class TeamList extends LightningElement {
    @api teams = [];    
    @api teamMemberList = [];
    @api primaryTeamMemberList = [];
    
    filterByTeam(event){
        const newEvent = new CustomEvent('filtermember', {detail: event.target.value});
        this.dispatchEvent(newEvent);
    }    

}
