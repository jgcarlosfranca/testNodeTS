import express from "express" // para instalar a tipagem precisa do npm i @types/express
import routes from "./routes"


const app = express()

app.use(routes)


app.listen(5500) // criação do server backend na porta 5500