import {config} from 'dotenv';
config({
    path:`.env.${process.env.NODE_ENV || 'development'}.local`

});
console.log("Loaded PORT:",process.env.PORT);
export const{JWT_SECRET,
    JWT_EXPIRES_IN,
    PORT,
    NODE_ENV,
    ARCJET_ENV,
    ARCJET_API_KEY,
    QSTASH_TOKEN,
    QSTASH_URL,
    SERVER_URL,
    DB_URI,
    EMAIL_PASSWORD}=process.env;
