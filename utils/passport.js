const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('config');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    console.log(jwtOptions)
    // Logic for authenticate 
    //done(null, false);
    done(null, { user: 'user'});
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
