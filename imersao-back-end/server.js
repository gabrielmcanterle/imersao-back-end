import express from 'express';

const app = express();

app.listen(3000,() => {
    (console.log("servidorEscutando"));
});

app.get("/api", (req,res) => {
    res.status(200).send("Oi");
});

app.get("/livro", (req,res) => {
    res.status(200).json(
    {titulo : "Senhor dos aneis",
        autor : "J.R.R Tolkien",
        ano : "1954",
        genero: "fantasia"
     });
});