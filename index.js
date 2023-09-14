const cors = require("cors");
const express = require ("express");
const morgan = require ("morgan");
const {sequelize} = require ('./database')

                                    /// require ("./src/models/Note")
const app = express();
const puerto = 4000 ;

// middelewares 
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false}))
app.use(express.static("public"));
app.set("views",__dirname + "/src/views");
app.set("view engine", "ejs");


// routes

app.use('/posts', require('./routes/posts.routes'));

//configuracion

app.listen( puerto, () => {
    sequelize.sync({force: false});
    console.log(`Servidor de Espress en Puerto ${puerto}`) });