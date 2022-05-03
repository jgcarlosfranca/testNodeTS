interface IMailTo{
    name: string
    email: string

}

interface IMailMsg{
    subject: string
    body: string
    attachment?: string[] // pode ser declarado Array<string>

}

class EmailService{
    sendMail(to: IMailTo, message: IMailMsg){
        console.log('Email enviado')
    }

}

export default EmailService