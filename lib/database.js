/**
 * Created by 27353 on 2017/10/30.
 */
const  Sequelize  =require("sequelize");

const sequelize = new Sequelize('edu_system','root','123456',{
    host:'localhost',
    dialect:'mysql',

    pool:{
        max:5,
        min:0,
        idle:10000
    }

});

sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('administrator',{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    password: {
        type: Sequelize.STRING
    }
},{
    freezeTableName : true,
    timestamps:false
});
/*User.findAll().then(function (data) {
    console.log(data);
})*/

const  db = {
    findByUsername : function (username,cb) {
        User.findOne({
            where:{id:'admin'}
        }).then( function (Project) {
            console.log(Project);
            if(username.password === Project.dataValues.password){
                return cb(null,username);
            }else {
                return cb(null,null);
            }
        })
    }

}

db.findByUsername({password:'3185dz'},function (a,b) {
    if(b !== null){
        console.log('success');
    }
});

module.exports = db;