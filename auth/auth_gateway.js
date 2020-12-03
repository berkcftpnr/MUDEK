const jwt = require("jsonwebtoken");
const token_key = require("../config/config.secret");

module.exports = function(req, res, next) {
    //This function is a middleware for all API routes except for login, this
    //function validates users token and redirects to the API call if valid,
    //sends a 401 status if not authorized
    const token = req.header('auth-token');
    console.log(token);
    if(!token) return res.status(401).send('E_ACCDENIED');

    try{
        const verified = jwt.verify(token, token_key);
        req.user = verified;
        next();
    } catch (err){
        res.status(401).send('E_ACCDENIED_INV_TOKEN');
    }
};
