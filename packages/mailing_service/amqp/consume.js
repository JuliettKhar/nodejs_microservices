import amqp from 'amqplib/callback_api.js';
import {config} from "../config/index.js";
import { sendMail } from "../handler/sendMail.js";

const q = 'test_q';

export default function setConsume () {
    amqp.connect(config.ampq.uri, (err, conn) => {

        if (err) {
            throw  new Error(err)
        }

        conn.createChannel((err, ch) => {
            if (err) {
                throw  new Error(err)
            }

            ch.assertQueue(q, {durable: true});

            ch.consume(q, msg => {
                let mail;
                try {
                 mail = JSON.parse(msg.content.toString());
                } catch (e) {
                    console.log(e)
                    mail = msg
                }

                console.log('mail received', mail)
                sendMail(mail)
                ch.ack(msg)
            }, {noAck: false})
        })
    });
}