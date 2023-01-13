import express from 'express';
import mongoose from "mongoose";
import router from "./router/router.js";
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv';

const app = express();
app.use(express.json())

app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
dotenv.config()

const url = process.env.DB_URL
const port = process.env.PORT

const startApp = async () => {
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(port, () => console.log(`Server Working - ${port}`));
    } catch (e) {
        console.log(e)
    }
}

startApp()





