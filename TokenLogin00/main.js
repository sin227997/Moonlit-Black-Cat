import express from 'express'
import { SERVER_CONFIG } from './src/configs/server.config.js'
import { UserRouter } from './src/routes/user.route.js'
import mongoose from 'mongoose';
import { DB_CONFIG } from './src/configs/db.config.js';
import { errorHandler } from './src/error/errHandler.middleware.js';
import { PostRouter } from './src/routes/post.route.js';
import { checkApiKeyMd } from './src/middleware/authen.middleware.js';

const DB_CONNECTION_STR = "mongodb+srv://" + DB_CONFIG.username + ":" + DB_CONFIG.password + "@test.awzfplt.mongodb.net/?retryWrites=true&w=majority&appName=test"

const app = express()

app.use(checkApiKeyMd)

app.use(express.json())

app.use(SERVER_CONFIG.RESOURCES.USER.CONTEXT_PATH, UserRouter)

app.use(SERVER_CONFIG.RESOURCES.POST.CONTEXT_PATH, PostRouter)

app.use(errorHandler)

async function main() {
    try {
        console.log("chuẩn bị connect tới DB")
        // mongoose hổ trợ kết nối và giữ connection
        await mongoose.connect(DB_CONNECTION_STR);

        console.log("connect tới database thành công")
        console.log("chuẩn bị start server")

        app.listen(SERVER_CONFIG.PORT, () => {
            console.log(`Server start thành công ${SERVER_CONFIG.PORT}`)
        })
    } catch (error) {
        console.log("error connect to database with error: " + error.message)
    }
}

main()
