const express = require("express");
const fs= require('fs');
const mysql = require('mysql')
const app = express();
const porta = 3000;
 
app.get("/", (req, res) => {
    const mensagem = `${new Date().toISOString()}: chegou request`;
     var logStream = fs.createWriteStream('logs/log.app.txt', {flags: 'a'});
    logStream.write(mensagem);
    logStream.end('\n');
  
    const connection = mysql.createConnection({
        host: 'mysql',
        user: 'sisaud',
        password: 'Senha-321&',
        database: 'sisaud-db'
    });
 
    connection.connect()
    connection.query('SELECT * from Usuario', (err, rows, fields) => {
        if (err) throw err
 
        console.log('The solution is: ', rows);
       
        var nomes = "";
        rows.forEach(usuario => {
           
            nomes += usuario.nome + ' <br>';
        });
   
        res.send(nomes);
    });
 
    connection.end();
});
 
app.listen(porta, () => {
    console.log(`Escutando na porta: ${porta} `);
});
