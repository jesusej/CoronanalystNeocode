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

app.post('/loginShow', (req, res) => {


    db.query(
        //"SELECT Usuario, Contraseña FROM cuenta",
        "SELECT * FROM cuenta",
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
    //id de cuenta

    db.query(
        "INSERT INTO datos_personales (Edad, Nivel_estudios, Localidad, Estado_Civil, Nivel_socioeconomico, Tipo_complexion, Factores_Riesgo, idCuenta, IP, Dispositivo, SO) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [edad, nivelEstudios, localidad, estadoCivil, nivelSocioeconomico, tipoComplexion, factoresRiesgo, ip, dispositivo, so],
        (err, result) => {
            console.log(err);
        }
    );
});

app.listen(3001, () => {
    console.log("Funcionando en puerto 3001");
});