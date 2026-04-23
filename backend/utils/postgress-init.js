const config = require('./config');
const { getDb } = require("./db");
const logger = require('./logger');
const {initUsers} = require('./db-init/init-users');

async function initializeDBIfEmpty() {

  host = config.MYSQL_HOST,
    user = config.MYSQL_USER,
    password = config.MYSQL_PASSWORD,
    database = config.MYSQL_DATABASE,

    logger.debug('Configuración de conexión a MySQL:', {
      host,
      user,
      password: password ? '********' : 'No password provided',
      database
    });
  let connection;
  try {

      connection = await getDb();


      try {
        await initUsers(connection);
      } catch (err) {
        logger.error('initUsers ERROR:', err);
      }   



  } catch (error) {
    logger.error('Error FATAL en initializeAll():', error);
  } finally {
    if (connection) {
      connection.release();
    }
  }
}



module.exports = { initializeDBIfEmpty };