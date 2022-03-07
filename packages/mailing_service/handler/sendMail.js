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
                }
            ]
        })
    console.log(request.body, 'mailjet')
}