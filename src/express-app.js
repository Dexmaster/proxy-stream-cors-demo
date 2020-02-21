const express = require("express");
const timeout = require("connect-timeout");
const APP_TIMEOUT = 120; // seconds, e.g. 2min
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const {PROXY_EXPRESS_PORT} = process.env;

const app = express();
app.use(timeout(APP_TIMEOUT * 1000));
app.use(express.json());

app.get("/proxy", cors(), (req, res, next) => {
  require("./proxy")(req, res, next);
});

app.listen(PROXY_EXPRESS_PORT, () => console.log(`listening on port ${PROXY_EXPRESS_PORT}!`));
