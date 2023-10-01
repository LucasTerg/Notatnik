require('dotenv').config(); // load.env variables from .env file

module.exports = {
    port: process.env.PORT || 3050
}