require("dotenv").config();
const express = require("express");
const configViewEnginge = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEnginge(app);

// khai báo route
app.use("/", webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
