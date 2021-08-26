import passport from "passport";
import JwtPassport from "passport-jwt";


// database models
import { UserModel } from "../database/allModels";

const JWTStatergy = JwtPassport.Strategy;
const ExtractJWT = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoAPP",

};

export default (Passport) =>{
    passport.use(
        new JWTStatergy(options ,async(jwt__payload,done)=>{
            try {
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null,false);

                return done(null,true);
            } catch (error) {
                throw new error
            }
        })
    )
}