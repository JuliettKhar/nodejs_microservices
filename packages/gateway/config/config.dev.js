const { PORT, SERVICE_DB_PORT } = process.env;

export default {
    port: PORT ||  3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000,
        host: 'http://localhost'
    }
}