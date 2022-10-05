const db = require("./Index");

const Member = db.sequelize.define('Members',{
    memberId :   {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    teamId :   {
        type: db.DataTypes.INTEGER,
        allowNull: false
    },
    memberName : {
       type: db.DataTypes.STRING,
       allowNull: false        
    },
    skills:{
        type: db.DataTypes.STRING,
        allowNull: false  
    }
},{
    schema: 'team',
    tableName: 'Members',
    timestamps: false
})

const Team = require('./Team');
Team.hasOne(Member, {
    foreignKey: 'teamId', as : "memberInfo"
});
Member.belongsTo(Team, {   foreignKey: 'teamId', as : "teamInfo" });

module.exports = Member;