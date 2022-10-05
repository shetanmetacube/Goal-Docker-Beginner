const db = require("./Index");

const Team = db.sequelize.define('Teams',{
    teamId :   {
        type: db.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name : {
       type: db.DataTypes.STRING,
       allowNull: false        
    },
   // createdAt: Date,
   // updatedAt: true
},{
    schema: 'team',
    tableName: 'Teams',
    timestamps: true
})

module.exports = Team;