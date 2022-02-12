import express from 'express';
import bodyParser from "body-parser";
import {ApolloServer} from "apollo-server-express";
import {makeExecutableSchema} from "@graphql-tools/schema";
import { config } from './config/index.js'
const typeDefs = `
type Query { hey: String! }`;
const resolvers = {
    Query: {
        hey: () => 'hey there'
    }
}

const schema = makeExecutableSchema({typeDefs, resolvers});

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

    await new Promise(resolve => app.listen({port: config.port}, resolve));
    console.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    console.info(`🚀 App ready at http://localhost:${config.port}`);

    return {server, app};
}

const {server, app} = await startApolloServer();

app.use(bodyParser.json())