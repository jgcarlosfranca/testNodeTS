interface IMailTo {
    name: string
    email: string

}

interface IMailMsg {
    subject: string
    body: string
    attachment?: string[] // pode ser declarado Array<string>

}

interface IMessageDTO {
    to: IMailTo
    message: IMailMsg
}

//-DTO data transfer object (métodologia DDD)

interface IEmailService{
    sendMail(resquest: IMessageDTO): void
}

class EmailService implements IEmailService{
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }

}

export default EmailService