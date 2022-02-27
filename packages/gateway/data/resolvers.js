import axios from 'axios';
import { config } from "../config/index.js";
import { pushToMessageQ } from "../amqp/connect.js";

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
    let result;
    let err;

    try {
        const {data} = await axios.post(`${host}:${port}/mails`, payload)
        result = data;
    } catch (e) {
        err = e;
    }

    pushToMessageQ(JSON.stringify(payload))

    return result || err;
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