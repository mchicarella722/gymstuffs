const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt =  require('passport-jwt').ExtractJwt;
const User = require('../dbschema/User');
const dbConfig = require('./database');



module.exports = function(passport){
    let opts= {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey =  dbConfig.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=>{
        User.getUserbyId(jwt_payload._doc._id, (err, user)=>{
            if(err){
                return done(err, false);
            }
            if(user){
                return done(null,user);
            } else {
                return done(null, false);
            }

        });
    }));
}