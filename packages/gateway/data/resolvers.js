const mockMails =  [
            {
                subject: 'my first email',
                receiver: 'test@test.com',
                content: 'Hello',
            },
            {
                subject: 'my first email',
                receiver: 'test@test.com',
                content: 'Hello',
            },
            {
                subject: 'my first email',
                receiver: 'test@test.com',
                content: 'Hello',
            },
        ]

export const resolvers = {
    Query: {
        mails: () => mockMails,
        mail: (_, args, context) => (
            {
                subject: 'my first email',
                receiver: 'test@test.com',
                content: 'Hello',
            }
        )
    },
    Mutation: {
        mail: (_, args) => {
           mockMails[0] = args;
           return args
        }
    }
}