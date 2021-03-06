module.exports = {
    HOSTNAME : process.env.HOSTNAME, 
    PORT: process.env.PORT,  
    MYSQL: {
        HOSTNAME: process.env.MYSQL_HOSTNAME, 
        PORT: process.env.MYSQL_PORT, 
        USER: process.env.MYSQL_USER, 
        PASSWORD: process.env.MYSQL_PASSWORD, 
        DB_NAME: process.env.MYSQL_DB_NAME
    },
    JWT_SECRET: process.env.SECRET, 
    SALT: parseInt(process.env.SALT), 
    ORG_EMAIL: {
        EMAIL: process.env.ORG_EMAIL, 
        PASSWORD: process.env.ORG_EMAIL_PASSWORD
    }
}