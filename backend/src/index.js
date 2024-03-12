const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8000;
const BACKEND_LINK = `localhost:${PORT}`;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ Path: "../.env" });
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(require('./router/router'));

require("./db/conn");

app.listen(8000, () => {
    console.log(`Listening to port number ${PORT}, Running on ${BACKEND_LINK}`);
});
