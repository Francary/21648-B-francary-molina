const { sequelize} = require ('../../database')
const {DataTypes } = require ('sequelize')


const PostsModel = sequelize.define('posts',{
    title: DataTypes.STRING ,
    content: DataTypes.TEXT,
    image: DataTypes.TEXT,

})

module.exports = { PostsModel};