const authHandler = (req, res, next) => {

    console.log("auth completed..");
    next();
}

module.exports = authHandler;