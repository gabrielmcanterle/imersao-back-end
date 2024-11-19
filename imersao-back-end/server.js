import express from 'express';

const posts = [
    {
        id : 1,
        descricao: "uma foto teste",
        imagem : "https://placecats.com/millie/300/150"
    },
    {
        id : 2,
        descricao: "uma foto teste",
        imagem : "https://placecats.com/millie/300/150"
    },
    {
        id : 3,
        descricao: "uma foto teste",
        imagem : "https://placecats.com/millie/300/150"
    }
]



const app = express();
app.use(express.json());

app.listen(3000,() => {
    (console.log("servidorEscutando"));
});

app.get("/posts", (req,res) => {
    res.status(200).send(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});

//npm install mongodb
//mongodb+srv://gabrielmcanterle:lalala@cluster0.7ux4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
