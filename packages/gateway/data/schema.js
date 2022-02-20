import {makeExecutableSchema} from "@graphql-tools/schema";
import {resolvers} from "./resolvers.js";

const typeDefs = `
    type Query { 
        mails: [Mail]
        mail(subject: String!, receiver: String!): Mail 
    }
    type Mutation {
       mail(subject: String!, receiver: String!, content: String!): Mail  
    }
    type Mail {
       subject: String! 
       receiver: String!
       content: String
       _id: String
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
})