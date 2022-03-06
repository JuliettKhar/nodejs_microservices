import {config} from "../config/index.js";
import mailjet from 'node-mailjet'


export async function sendMail(mail) {
    const request = await mailjet
        .connect(config.mailJet.apiPublic, config.mailJet.apiSecret)
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "juliettkhar@gmail.com",
                        "Name": "Julia"
                    },
                    "To": [
                        {
                            "Email": mail.receiver,
                        }
                    ],
                    "Subject": mail.subject,
                    "TextPart": mail.content,
                    // "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                }
            ]
        })
    console.log(request.body, 'mailjet')
}