import 'express-async-error';
import express from 'express';

const app = express();


app.listen(3400, () => {
    console.log('app is up and running')
})