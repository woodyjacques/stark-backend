import { MailerOptions } from "@nestjs-modules/mailer";
require('dotenv').config();

export const mailerConfig: MailerOptions = {
    transport:{
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{ 
            user: process.env.mailerUser,
            pass: process.env.mailerPass
        },
        tls:{
            rejectUnauthorized: false
        }
    },
}