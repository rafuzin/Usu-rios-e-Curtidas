import knexConfig from "knex";
import 'dotenv/config'

export const knex = new knexConfig({
    client: "pg",
    connection: {},
    debug: true
})