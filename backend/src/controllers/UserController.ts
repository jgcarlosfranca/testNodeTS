import { Request, Response } from "express" // tipagem do req e do res

const user = [
    { name: 'Abc', email: 'abc@gmail.com', serie: 123 }
]

export default {
    async index(req: Request, res: Response){ // tipagem do req e do res
        return res.json(user)
    }
}
