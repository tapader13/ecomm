const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};
exports.sanitaizer = (user) => {
  return { id: user.id, role: user.role };
};
exports.SECRET_KEY = 'SECRET_KEY';
exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWM0ZmY2OGU3ZTIwYTgyYjc2YzcwNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA0NzY3MTA2fQ.gEksVm-yoTJh38RIHZTWuNy2I_uhMDwvK-zlKNDqqk8';
  return token;
};
