//import 'express-async-error';
import express from 'express';
import middleware from './middlewares/index.middleware.js';
const app = express();
middleware(app);

app.listen(4500, () => {
    console.log('app is up and running on 4500')
})