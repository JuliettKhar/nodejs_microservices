import amqp from 'amqplib/callback_api.js';
import {config} from "../config/index.js";

const q = 'test_q';
let channel = null;

amqp.connect(config.ampq.uri, (err, conn) => {
    if (err) {
        throw  new Error(err)
    }

    conn.createChannel((err, ch) => {
        if (err) {
            throw  new Error(err)
        }

        ch.assertQueue(q, {durable: true});
        channel = ch;
    })
});

export const pushToMessageQ = (msg) => {
    if (!channel) {
        setTimeout(() => pushToMessageQ(msg), 1000)
    }

    channel.sendToQueue(q, Buffer.from(msg));
    return { m: 'done' }
}