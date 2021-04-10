const express = require("express")
const mysql = require("mysql");
const cors = require ("cors");

const app = express();

app.use(express.json());
app.use(cors());

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
        "INSERT INTO cuenta (Usuario, Contraseña, idTipo_De_Cuenta) VALUES (?, ?, 1)",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM cuenta WHERE Usuario = ? AND Contraseña = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({err:err})
            }
            
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({message: "No existe la combinación de correo y contraseña"});
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
    //id de cuenta

    db.query(
        "INSERT INTO datos_personales (Edad, Nivel_estudios, Localidad, Estado_Civil, Nivel_socioeconómico, Tipo_de_complexion, Factores_de_riesgo, Frecuencia_de_ejercicio, idCuenta, IP, Dispositivo, SO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [edad, nivelEstudios, localidad, estadoCivil, nivelSocioeconomico, tipoComplexion, factoresRiesgo, frecuenciaEjercicio, ip, dispositivo, so],
        (err, result) => {
            console.log(err);
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