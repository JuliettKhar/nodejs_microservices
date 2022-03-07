// https://pm2.keymetrics.io/docs/usage/application-declaration/
// https://www.cloudamqp.com/blog/part1-rabbitmq-for-beginners-what-is-rabbitmq.html
// https://app.mailjet.com/campaigns

module.exports = {
    apps: [
        {
            name: 'Gateway',
            script: "./server.js",
            cwd: "./packages/gateway",
            watch: true,
            env: {
                PORT: 3001,
                NODE_ENV: "development",
                SERVICE_DB_PORT: 4001,
                Q_URI: ''
            },
        },
        {
            name: 'DB Service',
            script: "./server.js",
            cwd: "./packages/database_service",
            watch: true,
            env: {
                PORT: 4001,
                NODE_ENV: "development"
            },
        },
        {
            name: 'Mailing Service',
            script: "./index.js",
            cwd: "./packages/mailing_service",
            watch: true,
            env: {
                Q_URI: 'amqps://xfjfwzwu:5QoJv9I-q1qF-EwHotgr6JAXgxsLDTil@roedeer.rmq.cloudamqp.com/xfjfwzwu',
                NODE_ENV: "development",
                MJ_API_SECRET: 'dd10b47de8c3c84b05714337a17b4152',
                MJ_API_PUBLIC: '90d517a540c36a91dca4e5b7967ecd64'
            },
        },
    ],

    // deploy : {
    //   production : {
    //     user : 'SSH_USERNAME',
    //     host : 'SSH_HOSTMACHINE',
    //     ref  : 'origin/master',
    //     repo : 'GIT_REPOSITORY',
    //     path : 'DESTINATION_PATH',
    //     'pre-deploy-local': '',
    //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.cjs --env production',
    //     'pre-setup': ''
    //   }
    // }
};
