/**
 * Created by 27353 on 2017/10/30.
 */
const Sequelize = require("sequelize");

const sequelize = new Sequelize('edu_system', 'root', '123456', {
    host: '',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
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

const User = sequelize.define('administrator', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const Grade = sequelize.define('stugrade2017', {
    id: {
        type: Sequelize.STRING,
        field: 'id',
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    sex:{
        type:Sequelize.STRING,
    },
    height:{
        type:Sequelize.STRING
    },
    weight:{
        type:Sequelize.STRING
    },
    lung:{
        type:Sequelize.STRING
    },
    frun:{
        type:Sequelize.STRING
    },
    jump:{
        type:Sequelize.STRING
    },
    zuowei:{
        type:Sequelize.STRING
    },
    erun:{
        type:Sequelize.STRING
    },
    onerun:{
        type:Sequelize.STRING
    },
    ywqz:{
        type:Sequelize.STRING
    },
    ytxs:{
        type:Sequelize.STRING
    },
    zongfen:{
        type:Sequelize.STRING
    },
    level:{
        type:Sequelize.STRING
    },
    xuejihao:{
        type:Sequelize.STRING
    }

}, {
    freezeTableName: true,
    timestamps: false
});
/*User.findAll().then(function (data) {
 console.log(data);
 })*/

const db = {
    findByUsername: function (user, cb) {
        User.findOne({
            where: {id: user.username}
        }).then(function (Project) {
            console.log(Project);
            if (user.password === Project.dataValues.password) {
                return cb(null, user.username);
            } else {
                return cb(null, null);
            }
        })
    },
    postOne:function (data,cb) {
        Grade.create(data).then( (error,data) =>{
            console.log(data);
            return cb(null,'OK')
        }).catch( (err)=>{
            return cb(err,null);
           // console.log(err);
        })

    },
    getOne:function () {
        Grade.findOne({
            where:{
                id:'20141001202'
            }
        }).then(function (project) {
            console.log(project);
        })
    },
    putOne:function (data,cb) {
        Grade.update(data).then((error,data) =>{
            console.log(data);
            return cb(null,'OK')
        }).catch( (err)=>{
            return cb(err,null);
            // console.log(err);
        })
    }

}
/*
db.getOne();
*/

/*
 db.findByUsername({password:'3185dz'},function (a,b) {
 if(b !== null){
 console.log('success');
 }
 });
 */

module.exports = db;