exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name').notNullable();
        table
            .string('email')
            .notNullable()
            .unique();
        table.string('password').notNullable();
        table.json('login_tokens');
        table.string('reset_token');
        table.timestamps();
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTableIfExists('users');
};
