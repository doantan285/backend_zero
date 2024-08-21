// cấu hình view engine của ứng dụng

const path = require("path");
const express = require("express");

const configViewEnginge = (app) => {
    app.set("views", path.join('./src', "views"));
    app.set("view engine", "ejs");
    // config static files: images/css/js
    app.use(express.static(path.join('./src', "public")));
};

module.exports = configViewEnginge;
