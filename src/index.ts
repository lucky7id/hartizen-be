import { config } from 'dotenv';
import knex from 'knex';

config();
const db = knex({
  client: 'pg',
  connection: {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'postgres',
  },
});

const f = async () => {
  await db.select();
};

f().then(() => console.log('success')).catch(console.error);
