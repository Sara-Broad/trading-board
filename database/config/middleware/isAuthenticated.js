module.exports = function (req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
    }
    // If the user isnt' logged in, redirect them to the login page
    return res.redirect("/");
  };

// const { verify } = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.header('x-auth-token');

//   if (!token) return res.status(401).send('No token, authorization denied!');

//   try {
//     const decoded = verify(token, process.env.JWT_KEY);
//     if (!decoded) return res.status(500).send('Something went wrong!');

//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.log(error.message);
//     return res.status(500).send('Invalid signature!');
//   }
// };

// module.exports = auth;