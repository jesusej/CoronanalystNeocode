const express = require("express")
const mysql = require("mysql");
const cors = require ("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { response } = require("express");

const app = express();
app.use(express.json());

// Especifica que métodos se usan, credenciales y el uso de cookies
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

// Especifica el nombre de la cookie, expiración, clave de hashing y opciones
app.use(session({
    key: "userId",
    secret: "pkglobalred",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24,
    },
}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "coronanalyst",
});

app.get('/register', (req, res) => {
    
    const username = req.body.username;

    db.query(
        "SELECT * FROM cuenta WHERE Usuario = ?",
        [username],
        (err, result) => {
            console.log(err);

            if (result.length > 0){
                res.send(true);
            } else {
                res.send(false);
            }
        }
    );
});

app.post('/register', (req, res) => {   
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM cuenta WHERE Usuario = ?",
        [username],
        (err, result) => {
            console.log(err);

            if ((result.length > 0) || (username == '') || (password == '')){
                res.send(false);
            } else {
                db.query( 

                    "INSERT INTO cuenta (Usuario, Contraseña, idTipo_De_Cuenta) VALUES (?, ?, 1)",
                    [username, password],
                    (err, result) => {
                        console.log(err);
                    }
                );
                res.send(true);
            }
        }
    );
     
    
});

// Método GET de login que manda los datos de un usuario registrado si es que existe y si su sesión sigue activa
app.get("/login", (req, res)=> {
    if (req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM cuenta WHERE Usuario = ? AND Contraseña = ?;",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            
            //console.log(result);
            // Registra al usuario en una sesión para que pueda revisitarlo
            if (result.length > 0) {
                req.session.user = result;
                console.log(req.session.user);
                res.send(result);
            } else {
                res.send({message: "No existe la combinación de correo y contraseña"});
            }
        }
    );
});

app.post('/datos_personales', (req, res) => {

    const edad = req.body.edad;
    const nivelEstudios = req.body.nivelEstudios;
    const localidad = req.body.localidad;
    const estadoCivil = req.body.estadoCivil;
    const ip = req.body.ip;
    const dispositivo = req.body.dispositivo;
    const so= req.body.so;
    const nivelSocioeconomico= req.body.nivelSocioeconomico;
    const tipoComplexion= req.body.tipoComplexion;
    const factoresRiesgo = req.body.factoresRiesgo;
    const frecuenciaEjercicio = req.body.frecuenciaEjercicio;
    const id = req.body.id;

    
    db.query(
        "INSERT INTO datos_personales (Edad, Nivel_estudios, Localidad, Estado_Civil, Nivel_socioeconomico, Tipo_de_complexion, Factores_de_riesgo, Frecuencia_de_ejercicio, IP, Dispositivo, SO, idCuenta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [edad, nivelEstudios, localidad, estadoCivil, nivelSocioeconomico, tipoComplexion, factoresRiesgo, frecuenciaEjercicio, ip, dispositivo, so, id],
        (err, result) => {
            console.log(err);
            if (err !== null)
            {
                res.send(true);
            }
            else{
                res.send(false);
            }
        }
    );
});

app.post('/encuesta', (req, res) => {

    db.query(
        "SELECT * FROM preguntas AS P JOIN opciones AS O WHERE P.idPreguntas = O.idPreguntas",
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            res.send(result);
        }
    );
});

app.post('/resultados', (req, res) => {

    //console.log(req.body);
    
    const answers = req.body.answers;

    for (var i = 0; i < answers.length; i++){
        console.log(answers[i]);
    }

    /*db.query(
        "INSERT INTO datos_personales (Edad, Nivel_estudios, Localidad, Estado_Civil, Nivel_socioeconomico, Tipo_de_complexion, Factores_de_riesgo, Frecuencia_de_ejercicio, IP, Dispositivo, SO, idCuenta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [edad, nivelEstudios, localidad, estadoCivil, nivelSocioeconomico, tipoComplexion, factoresRiesgo, frecuenciaEjercicio, ip, dispositivo, so, id],
        (err, result) => {
            if (err) {
                res.send({err:err});
            }
            res.send(result);
        }
    )*/
});

app.post('/register_client', (req, res) => {   
    const username = req.body.username;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM cuenta WHERE Usuario = ?",
        [username],
        (err, result) => {
            console.log(err);

            if ((result.length > 0) || (username == '') || (password == '')){
                res.send(false);
            } else {
                db.query( 

                    "INSERT INTO cuenta (Usuario, Contraseña, idTipo_De_Cuenta) VALUES (?, ?, 2)",
                    [username, password],
                    (err, result) => {
                        console.log(err);
                    }
                );
                res.send(true);
            }
        }
    );
     
});

app.listen(3001, () => {
    db.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
      });
    console.log("Funcionando en puerto 3001");
});