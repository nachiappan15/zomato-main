import googleOAuth from "passport-google-oauth20";
import jwt from "jsonwebtoken";


import { UserModel } from "../database/allModels"

const GoogleStrategy = googleOAuth.Strategy;


export default (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECERET,
                callbackURL: "http://localhost:4000/auth/google/callback"

            },
            async (accessToken, refreshToken, profile, done) => {
                // creating new user oject
                const newUser = {
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                };
                try {
                    // checking whether user exists
                    const user = await UserModel.findOne({ email: newUser.email });


                    if (user) {
                        // generate tokens
                        const token = user.generateJwtTokens();
                        // const token = user.generateJwtTokens();
                        // return user
                        done(null, { user, token });

                    } else {
                        // create new user
                        
                        const user = await UserModel.create(newUser);
                        // generate tokens
                        const token = user.generateJwtTokens();

                        // return user
                        done(null, { user, token });
                    }
                } catch (error) {
                    done(error, null);
                }
            }
        )
    );

    passport.serializeUser((userData, done) => done(null, {...userData}));

    passport.deserializeUser((id, done) => done(null, id));
};