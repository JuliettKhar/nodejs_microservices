const { Q_URI, MJ_API_SECRET, MJ_API_PUBLIC } = process.env;

export default {
    ampq: {
        uri: Q_URI || 'amqps://xfjfwzwu:5QoJv9I-q1qF-EwHotgr6JAXgxsLDTil@roedeer.rmq.cloudamqp.com/xfjfwzwu',
    },
    mailJet: {
        apiPublic: MJ_API_PUBLIC,
        apiSecret: MJ_API_SECRET
    }
}