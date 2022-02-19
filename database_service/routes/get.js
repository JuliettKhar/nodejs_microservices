import {Router} from 'express';
import mongoose from "mongoose";

const router = Router();

router.get('/', async (_, res) => {
    const Mail = mongoose.model('Mail')
    const m = new Mail({
        subject: 'Subj',
        receiver: 'test@com',
        content: 'Mail content 2'
    })
    await m.save()
    res.send('Hello from the db')
})


export default router