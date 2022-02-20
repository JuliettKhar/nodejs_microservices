const path = require('path');
const basePath = path.join(__dirname, '/packages');

module.exports = {
    apps: [
        {
            name: 'Gateway',
            script: `./packages/gateway/server.js`,
            watch: true,
            env: {
                PORT: 3001,
                NODE_ENV: "development",
                SERVICE_DB_PORT: 4001
            },
        },
        {
            name: 'DB Service',
            script: `./packages/database_service/server.js`,
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
