const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ({
    username : "postgres",
    password : "12345678",
    database : "buku-buku",
    host : "localhost",
    dialect : "postgres",
    port : "5432"
});

module.exports = Sequelize