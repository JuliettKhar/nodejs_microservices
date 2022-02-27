const path = require('path');
const basePath = path.join(__dirname, '/packages');

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
