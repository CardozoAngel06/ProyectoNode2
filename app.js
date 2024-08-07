const express = require('express');
const app = express();
const port = 2006;

app.get('/', (req, res) => {
    res.send('<div style="background: black; color: white;"><h2>Bienvenidos :p</h2></div>')
});

app.get('/json', (req, res) => {
    res.json({"id": 1, "Prod": "Remera", "Precio" : 20000})
});

app.get('/imagen', (req, res) => {
    res.sendFile(__dirname + "/gato.jpg")
});

app.use((req, res) => {
    res.status(404).send("Esta pagina no existe :(")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})