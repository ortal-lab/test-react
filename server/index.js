const express = require("express");
const app = express();
// const http = require("http").Server(app);
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./router/router");
const cors = require("cors");

dotenv.config();
app.use(bodyParser.json());
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};
mongoose
    .connect(process.env.CONNECTION_URL, connectionParams)
    .then(() => {
        console.log(`connected to db`);
        // app.listen(process.env.PORT, () => {
        //     console.log(`listening on ${process.env.PORT} and connected to db`);
        // });
    })
    .catch((err) => console.log(err.message));
app.use(cors());
app.use("/api", router);
app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT} and connected to db`);
});
