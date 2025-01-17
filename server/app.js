const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
// router
const v1 = "/api/v1";
const cms = `${v1}/cms`;
const serviceRouter = require(`./app${v1}/service/router`);
const imageRouter = require(`./app${v1}/image/router`);
const projectRouter = require(`./app${v1}/project/router`);
const meetingRouter = require(`./app${v1}/meeting/router`);
const clientRouter = require(`./app${v1}/client/router`);
const companyRouter = require(`./app${v1}/company/router`);
// authenticate
const userAuthRouter = require(`./app${v1}/authUser/router`);
const clientAuthRouter = require(`./app${v1}/authClient/router`);

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handle-error");

// cors
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

// router
app.use(cms, serviceRouter);
app.use(cms, imageRouter);
app.use(cms, projectRouter);
app.use(cms, meetingRouter);
app.use(cms, clientRouter);
app.use(cms, companyRouter);
// authentication
app.use(cms, userAuthRouter);
app.use(cms, clientAuthRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
