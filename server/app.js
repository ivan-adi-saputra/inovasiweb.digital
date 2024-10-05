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
const userRouter = require(`./app${v1}/auth/router`);

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handle-error");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// router
app.use(cms, serviceRouter);
app.use(cms, imageRouter);
app.use(cms, projectRouter);
app.use(cms, meetingRouter);
app.use(cms, userRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
