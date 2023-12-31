const jwt = require("jsonwebtoken");
module.exports.authMiddleware = (req, res, next) => {
    

  req.aziz="aziz un nabi"
    
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      const user = jwt.verify(token, process.env.SECRET_KEY);
      req.user = user;
      next();
    } catch (error) {
      // Invalid or expired token
      return res.status(401).json({ error: error.message });
    }
  } else {
    // user unauthorized
    return res.status(401).json({ msg: "Please provide authorization token" });
  }
};