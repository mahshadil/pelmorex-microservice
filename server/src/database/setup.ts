import db from './database'

const setupTables = async () => {
    try {
        await db.query(`
            CREATE TABLE if not exists short_term_weather (
                id SERIAL PRIMARY KEY,
                lat FLOAT NOT NULL,
                long FLOAT NOT NULL,
                temp INTEGER NOT NULL,
                wind INTEGER NOT NULL,
                humidity INTEGER NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(lat, long, timestamp)
            );
        `, '');

        await db.query(`
            CREATE TABLE  if not exists observation_weather (
                id SERIAL PRIMARY KEY,
                lat FLOAT NOT NULL,
                long FLOAT NOT NULL,
                temp INTEGER NOT NULL,
                wind INTEGER NOT NULL,
                humidity INTEGER NOT NULL,
                timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                UNIQUE(lat, long, timestamp)
            );
        `, '');
        // Creating an index on the email column of the users table
        // await db.query(`CREATE INDEX idx_users_email ON users(email);`);

        // // Creating an index on the posted_at column of the posts table
        // await db.query(`CREATE INDEX idx_posts_postedat ON posts(posted_at);`);

        console.log("Database setup successfully!");
    } catch (err) {
        console.error("Error setting up tables:", err);
    }
}

export default setupTables;