import {makeExecutableSchema} from "@graphql-tools/schema";
import {resolvers} from "./resolvers.js";

const typeDefs = `
    type Query { 
        mails: Mails
        mail(id: String!): MailById 
    }
    type Mutation {
       mail(subject: String!, receiver: String!, content: String!): MailById  
    }
    type Mails {
        data: [Mail]
    }
    type MailById {
        data: Mail
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