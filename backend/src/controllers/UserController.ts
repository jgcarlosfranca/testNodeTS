import { Request, Response } from "express" // tipagem do req e do res
import EmailService from "../services/EmailService"

const users = [
    { name: 'Abc', email: 'abc@gmail.com', serie: 123 }
]

export default {
    async index(req: Request, res: Response) { // tipagem do req e do res
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail(
            { name: 'teste', email: 'teste@gmail' },
            { subject: 'email title', body: 'testing my api to send email' }
        )

    }
}
