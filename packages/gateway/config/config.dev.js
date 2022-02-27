const { PORT, SERVICE_DB_PORT, Q_URI } = process.env;

export default {
    port: PORT ||  3000,
    serviceDatabase: {
        port: SERVICE_DB_PORT || 4000,
        host: 'http://localhost'
    },
    ampq: {
        uri: Q_URI || 'amqps://xfjfwzwu:5QoJv9I-q1qF-EwHotgr6JAXgxsLDTil@roedeer.rmq.cloudamqp.com/xfjfwzwu'
    }
}