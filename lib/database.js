/**
 * Created by 27353 on 2017/10/30.
 */
const Sequelize = require("sequelize");

const sequelize = new Sequelize('edu_system', 'root', '123456', {
    host: 'localhost',
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
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});

const Grade = sequelize.define('', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
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
    }

}

/*
 db.findByUsername({password:'3185dz'},function (a,b) {
 if(b !== null){
 console.log('success');
 }
 });
 */

module.exports = db;