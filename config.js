const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID |BWM-XMD;;;H4sIAAAAAAAAA5VV246jOBT8F7+GGcKdRGppISE3CLmQ+2oeDBgwAUzAkJBW/n1Fp1vdDzuzvTxZBtcpV9U5vIKM4BKZqAH9V5AXuIYUtUva5Aj0gV4FASoAA3xIIegDdRkXjSDOS46vHN6v16aXOTHhUr1MlPAUbdkqJKo7JIL2Ah4MyCs3wd4fADdddd0xITusTsWGPXjQ3EXYMWcXIyCd+oD0dAhlOu51rscX8GgRIS5wFhp5hFJUwMREzRLi4nv04ZItVZSWE3bGqZaj69vE061DYF7PKDQc6zLSMr+rEE+Yf4/+nlvX2lARuweup8hX4WyERk4imO9CMYxltNUc4bwR991QfdIvcZghf+qjjGLafFv3dBZkHgs9NpST7eYkl06IPF0KyYpcqyOO9AkrNtONQ0bke8Ttjb2PUy0jvj3DQVQmy21PKPW810E43jdkBQ+20p1nw7P4lfiy+MjK+f/oPp1qKvVgsTqHuWhVJ7i927izD831aT2w7J0nZmsTqnaP+yb9lepGpSxdxxJvZOV5Gdj39aKue8l83VjHjLDcmDWJNiZX8kkf0qr4E0u7dgNr1E0JRb17aC9Kqd7YjmLcb4vmnvDKpBI6eYFWy8sgjSG6Q3tMdjyvrYxi1Rkvbmonn1WDSBQNTXDcIZrYRz3SXt5udEbN1Ad97sGAAoW4pAWkmGTtHi9xDIB+7SCvQPRNXuBydYpuONwqZEboenXHXV3odfNDeGry9L7iFkT2scBvpsYLYEBeEA+VJfInuKSkaOaoLGGIStD/+xcDMnSjT+PacgLHgAAXJd1mVZ4Q6H+4+vESeh6pMuo0mTdoF6gA/e7nNqIUZ2HZ6lhlsPAiXKNBBGkJ+gFMSvRggI9q7KEWD5xXUJuMONNx9hUyx4p1yLPZqqUckez5iawEUFRk/kdPleUfIs9zP1zXVX5IvCRKSIUBF0iAAfi9Z9ozv7XQzXs40BE+jqWxFSe+Y2nSbjdv0KR8s+GpPSqQD/q0qBADXOidq3xDzij7A663kIIdy3e6xpTlI4c9Dg61t7h4a237BffpKei/fs6pAfFbPHu+nDj8fgcYkL5FELc35yVR6YkcJyiq0Jf/Kn9eWx1hnv/MEG1h3zVvD/iIQpyUoA8GVqfIZ2RkLIZb2SrHY20eaoNQA58efYT9GSZdjq7m/DJYRHdsWlbSY2NjnbhmIG55V3eT+rKm+7m4vCfXl38BAX2QJH4TGepxFnM7eYHjWriMl+ltdj2I3UsoDcykPt0icXKotYRrblEVkGTtZEu1wqGLAnsqaHRmiS48TTpWlCOhtistfGmrPbPytZjcXLnOaM/KCkt2Yzp353paJPS+GmFPkHqHnj4QYuSQwY6PTK647gqqb86LaXSpTJ1o150Vo+XB4nZTMz4np/lEt8I4fLbh2xhI3scvfmuQ1/dkBRi9TbMMtg79hzdfM959MF8g3sfjb3KkrxDxBrEZxsQTMW6kIBBvxmnfZJ2RnV73kiuf3V28GKqSBx6PXwzIE0gDUqTt3yvzC4J9wIAEllT7bNMNTlFJYZqDPqcIclfqSV2OAWmj5blDIf3obqC1z/BYg8c/M85UUvkHAAA=| '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

