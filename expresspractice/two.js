
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/product", (req, res) => {
    const pid = req.query.pid;
    const pname = req.query.pname;

    console.log("Product details requested");

    res.status(200).json({
        pid: pid,
        pname: pname
    });
});

// POST: receive product details from the request body
app.post("/product", (req, res) => {
    const pid = req.body.pid;
    const pname = req.body.pname;

    console.log("Product details received");

    res.status(201).json({
        message: "Product received successfully",
        pid: pid,
        pname: pname
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
// special method which has 3 param req, res, next is middleware

// special method which has 4 param req, res,error, next is middleware error handler
// next is a function (with or without param) until i call next method the req will 
// not send to the res
// middleware will send the response