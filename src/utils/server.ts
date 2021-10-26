import express from 'express';
import routes from './../routes';

const cors = require('cors');

function createServer() {
    const app = express();

    app.use(express.json());
    app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET']
    }))

    routes(app);

    return app;
}

export default createServer;