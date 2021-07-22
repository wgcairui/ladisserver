import { DefaultConfig } from "@midwayjs/typegoose"

export const mongoose: DefaultConfig = {
    uri: `mongodb://${process.env.NODE_Docker === 'docker' ? 'mongo' : 'uart.ladishb.com'}:27017/ladis`,
    options: {
        dbName: "ladis",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export const cache = {
    store: "memory",
    options: {
        max: 1000,
        ttl: 6000
    }
}