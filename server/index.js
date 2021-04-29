const express = require("express")
const mysql = require("mysql");
const cors = require ("cors");

const bcrypt = require('bcrypt');
const saltRounds = 10;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

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

    
    bcrypt.hash(password, saltRounds, (err, hash) => {

        if(err) {
            console.log(err);
        }
        console.log(hash);

        db.query(
            "INSERT INTO cuenta (Usuario, Contraseña, idTipo_De_Cuenta) VALUES (?, ?, 1)",
            [username, hash],
            (err, result) => {
                console.log(err);
                console.log(result);
            }
        );
    })
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

    
    for(var i = 0; i < answers.length; i++){

        db.query(
            "INSERT INTO respuestas(fkCuenta, fkPreguntas, fkOpciones, Respuesta) VALUES (?, ?, ?, ?)",
            [id, answers[i].idPreg, answers[i].idOpcion, answers[i].value],
            (err, result) => {
                
                res.send(result);


            }
        );
    }
});

// Método GET de logoff que manda los datos de un usuario registrado si es que existe y si su sesión sigue activa
app.get("/logoff", (req, res)=> {
    delete req.session.user;
    res.send({message: "ok"});
})

app.listen(3001, () => {
    db.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
      });
    console.log("Funcionando en puerto 3001");
});