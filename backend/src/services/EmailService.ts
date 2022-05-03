interface IMailTo{
    name: string
    email: string

}

interface IMailMsg{

}

class EmailService{
    sendMail(to: IMailTo, message){
        console.log('Email enviado')
    }

}

export default EmailService