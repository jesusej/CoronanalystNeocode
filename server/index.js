const express = require("express")
const mysql = require("mysql");
const cors = require ("cors");

const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const { response } = require("express");
const { json } = require("body-parser");


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
        
                bcrypt.hash(password, saltRounds, (err, hash) => {
                
                    if(err) {
                        console.log(err);
                    }

                            db.query( 
                                "INSERT INTO cuenta (Usuario, Contraseña, idTipo_De_Cuenta) VALUES (?, ?, 1)",
                                [username, hash],
                                (err, result) => {
                                    console.log(err);
                                    console.log(result);
                                }
                            );
                            res.send(true);
                })
            }
        });
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
        "SELECT * FROM cuenta WHERE Usuario = ?;",
        username,
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            
            // Envía los resultados como cookie
            if (result.length > 0) {
                bcrypt.compare(password, result[0].Contraseña, (error, response) => {
                    if (error) {
                        res.send(error);
                    }
                    else if (response) {
                        delete result[0].Contraseña;
                        req.session.user = result;
                        res.send(result);
                    } else {
                        res.send({message: "No existe la combinación de correo y contraseña"});
                    }
                })
            } else {
                res.send({message: "El correo no existe"});
            }
        }
    );
});

app.post('/checkPersonalData', (req, res) => {

    const id = req.body.id;

        db.query(
            "SELECT * FROM datos_personales WHERE idCuenta = ?",
            [id],
            (err, result) => {
                console.log(err);
    
                if ((result.length > 0) || (id == '')){
                    //res.send({message:"Ya hay registros"});
                    res.send(true);
                }
                else {
                    res.send(false);
                }
            }

    );
});

app.post('/datos_personales', (req, res) => {

    const genero = req.body.genero;
    const edad = req.body.edad;
    const nivelEstudios = req.body.nivelEstudios;
    const estadoCivil = req.body.estadoCivil;
    const ocupacion = req.body.ocupacion;
    const ingreso = req.body.ingreso;
    const localidad = req.body.localidad;

    const ip = req.body.ip;
    const dispositivo = req.body.dispositivo;
    const so= req.body.so;
    const id = req.body.id;
    

            // Revisión de si hay datos registrados
            if ((edad == '') || (nivelEstudios == '') || (localidad == '') ||  (estadoCivil == '') ||
             (ingreso == '') || (genero == '') || (ocupacion == '') || (id == ''))
             {
                res.send(false);
            } else {

                db.query(
                    "INSERT INTO datos_personales (idCuenta, Genero, Edad, Estado_Civil, Nivel_estudios, Ocupacion,  Ingreso_Mensual, Localidad, IP, Dispositivo, SO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                    [id, genero, edad, estadoCivil, nivelEstudios, ocupacion, ingreso, localidad, ip, dispositivo, so],
                    (err, result) => {
                        console.log(err);
                        // if (err !== null)
                        // {
                        //     res.send(true);
                        // }
                        // else{
                        //     res.send(false);
                        // }
                    }
                );
                res.send(true);
            }
        // }
    // );
});

app.post('/checkAnswers', (req, res) => {

    const id = req.body.id;

        db.query(
            "SELECT * FROM respuestas WHERE fkCuenta = ?",
            [id],
            (err, result) => {
                console.log(err);
                console.log(result);
    
                if ((result.length > 0) || (id == '')){
                    //res.send({message:"Ya hay registros"});
                    res.send(true);
                }
                else {
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

    const id = req.body.id;
    const answers = req.body.answers;


    // Revisión de si hay cuenta activa
    if (id == '')
    {
        res.send(false);
    }
    else 
    {
        for(var i = 0; i < answers.length; i++){
            db.query(
                "INSERT INTO respuestas(fkCuenta, fkPreguntas, fkOpciones, Respuesta) VALUES (?, ?, ?, ?)",
                [id, answers[i].idPreg, answers[i].idOpcion, answers[i].value],
                (err, result) => {
                    //console.log(err);
                }
            );
        }
        res.send(true);
    }

    //console.log("Respuestas:");
    //console.log(answers);
    //console.log('');
});

app.post('/cuentas_admin', (req, res) => {


    const idTipo = req.body.id;

    if (idTipo != 3)
    {
        res.send(false);
    }

    db.query(
        "SELECT * FROM cuenta WHERE idTipo_De_Cuenta = 1 OR idTipo_De_Cuenta = 2",
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            res.send(result);
        }
    );
});

// Método GET de logoff que manda los datos de un usuario registrado si es que existe y si su sesión sigue activa
app.get("/logoff", (req, res)=> {
    delete req.session.user;
    res.send({message: "ok"});
})

app.post('/eliminar_cuenta', (req, res) => {   
    const cuenta = req.body.cuenta;
    
    if (cuenta == ''){
        res.send(false);
    } else {
        db.query( 

            "DELETE FROM cuenta WHERE Usuario = ?",
            [cuenta],
            (err, result) => {
                if (err)
                {
                    console.log(err);
                    res.send(false);
                }
            }
        );
        res.send(true);
    }
});

app.get('/getUnityData', (req, res) => {   

    const sqlQuery = "SELECT COUNT(cuenta.idTipo_De_Cuenta) AS usuariosRegistrados, " +
    "COUNT(DISTINCT dp.idCuenta) AS datosRegistrados, " +
    "COUNT(DISTINCT r.fkCuenta) AS respuestasEncuesta FROM cuenta " +
    "LEFT JOIN datos_personales AS dp on dp.idCuenta = cuenta.idCuenta " +
    "LEFT JOIN (SELECT DISTINCTROW fkCuenta from respuestas) AS r on r.fkCuenta = cuenta.idCuenta " +
    "WHERE idTipo_De_Cuenta = 1 GROUP BY cuenta.idTipo_De_Cuenta";

    db.query( 
        sqlQuery,

        (err, result) => {
            //console.log(err);
            console.log(result[0]);
            res.send(result[0]);
        }
    );
});

app.post('/datos', (req, res) => {

    db.query(
        "SELECT O.idOpciones, P.idPreguntas, P.Pregunta, O.Opcion, count(R.fkOpciones) AS total FROM opciones AS O JOIN preguntas AS P left JOIN respuestas AS R on O.idOpciones = R.fkOpciones WHERE P.idPreguntas = O.idPreguntas AND (P.idPreguntas = 1 or P.idPreguntas = 6 or P.idPreguntas = 4 or P.idPreguntas = 9 or P.idPreguntas = 11 or P.idPreguntas = 2 or P.idPreguntas = 7 or P.idPreguntas = 3 or P.idPreguntas = 8) GROUP BY O.idOpciones",
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            res.send(result);

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