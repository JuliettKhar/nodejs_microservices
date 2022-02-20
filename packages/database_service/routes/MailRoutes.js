import {Router} from 'express';
import mongoose from "mongoose";

const router = Router();

router
    // .get('/', async (_, res) => {
    //     const Mail = mongoose.model('Mail')
    //     const m = new Mail({
    //         subject: 'Subj',
    //         receiver: 'test@com',
    //         content: 'Mail content 2'
    //     })
    //     await m.save()
    //     res.send('Hello from the db')
    // })
    .get('/mails', async (_, res) => {
        const Mail = mongoose.model('Mail')
        let mails;
        let error;

        try {
           mails = await Mail.find()
        } catch (e) {
            error = e
        }

        res.send({
            message: 'Got resp from db',
            service: 'DB service',
            status: 200,
            data: mails || null,
            error: error || null
        })
    })
    .get('/mails/:id', async ({params: {id}}, res) => {
        const Mail = mongoose.model('Mail')
        let mails;
        let error;

        try {
           mails = await Mail.findOne({_id: id})
        } catch (e) {
            error = e
        }

        res.send({
            message: 'Got resp from db',
            service: 'DB service',
            status: 200,
            data: mails || null,
            error: error || null
        })
    })
    .post('/mails', async ({body: {receiver, subject, content}}, res) => {
        let mail;
        let error;

        if (!receiver || !subject || !content) {
            res
                .status(400)
                .send({
                    message: 'All fields are required',
                    service: 'DB service',
                    status: 400,
                    data: null,
                    error: 'All fields are required'
                })
        }

        const Mail = mongoose.model('Mail')
        const m = new Mail({
            subject,
            receiver,
            content
        })
        try {
            mail = await m.save()
        } catch (e) {
            error = e
        }
        res.send({
            message: 'Got resp from db',
            service: 'DB service',
            status: 200,
            data: mail || null,
            error: error || null
        })
    })


export default router