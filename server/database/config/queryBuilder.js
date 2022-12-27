import pkg from 'pg';
import dotenv from 'dotenv';
import knex from 'knex'
import { attachPaginate } from 'knex-paginate';
dotenv.config();
const {
    NODE_ENV, DEV_DB_URL, DATABASE_URL,TEST_DB_URL
} = process.env;

let DB_URL = '';
let sslValue = false;

switch (NODE_ENV) {
    case 'production':
        DB_URL = TEST_DB_URL;
        sslValue = { rejectUnauthorized: false };
        break;
    case 'development':
        DB_URL = DEV_DB_URL;
        break;
    default:
        throw new Error('No Database Found');
}

const options = {
    connectionString: DB_URL,
    ssl: sslValue,
};

const pg = knex({
    client: 'pg',
    connection: DB_URL,
    searchPath: ['knex', 'public'],
});
attachPaginate();

const queryBuilder = pg
export default queryBuilder