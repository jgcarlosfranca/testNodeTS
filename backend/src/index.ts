import express from "express" // para instalar a tipagem precisa do npm i @types/express


const app = express()

app.get('/', (req, res) => {
    return res.send('Hello World')
})




app.listen(5500) // criação do server backend na porta 5500