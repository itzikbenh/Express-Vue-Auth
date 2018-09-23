module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'node',
        },
        migrations: { tableName: 'knex_migrations' },
        debug: false,
    },
};
