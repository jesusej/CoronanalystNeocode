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


app.listen(3001, () => {
    console.log("Funcionando en puerto 3001");
});