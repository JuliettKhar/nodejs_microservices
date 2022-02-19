import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const MailSchema = new Schema({
    subject: String,
    receiver: String,
    content: String
})

export default model('Mail', MailSchema)