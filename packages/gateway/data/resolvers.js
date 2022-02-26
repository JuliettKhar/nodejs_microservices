import axios from 'axios';
import { config } from "../config/index.js";

const { serviceDatabase: { port, host }} = config;

const getMails = async () => {
    try {
        const {data} = await axios.get(`${host}:${port}/mails`)
        return data
    } catch (e) {
        console.log(e)
    }
}
const getSingleMail = async (id) => {
    try {
        const {data} = await axios.get(`${host}:${port}/mails/${id}`)
        return data
    } catch (e) {
        console.log(e)
    }
}

const postSingleMail = async (payload) => {
    try {
        const {data} = await axios.post(`${host}:${port}/mails`, payload)
        return data
    } catch (e) {
        console.log(e)
    }
}

export const resolvers = {
    Query: {
        mails: () => getMails(),
        mail: (_, {id}) => getSingleMail(id)
    },
    Mutation: {
        mail: (_, args) => postSingleMail(args)
    }
}