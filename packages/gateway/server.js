import express from 'express';
import bodyParser from "body-parser";
import {ApolloServer} from "apollo-server-express";
import {config} from './config/index.js'
import schema from "./data/schema.js";

async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({
        schema,
        context: {
            // loaders: loaders()
        }
    });
    await server.start();

    server.applyMiddleware({app});

    await app.listen({port: config.port}, () => {
        console.info(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`);
        console.info(`🚀 App ready at http://localhost:${config.port}`);
    });


    return {server, app};
}

const {server, app} = await startApolloServer();

app.use(bodyParser.json())