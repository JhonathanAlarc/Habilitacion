const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "jhonfercho43@gmail.com",
          pass: "vogsqckubvqtvhax"
        }
      });
    const mensaje={
        from: "Drogueria Colon <jhonfercho43@gmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;