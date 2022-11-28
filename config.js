const PgUser = 'postgres';
const PgHost = 'localhost';
const PgDb = 'exoplanets';
const PgPassword = 'ipl';
const PgPort = 5432;

const DATABASE_URL = 'process.env.DATABASE_URL';

module.exports = {
    //ConnectionString: 'postgres://' + PgUser + ':' + PgPassword + '@' + PgHost + ':' + PgPort + '/' + PgDb
	ConnectionString: DATABASE_URL
};
