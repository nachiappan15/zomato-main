// library
import express from "express";
import passport from "passport";




// Models
import { UserModel } from "../../database/user"


// validation
import { validateSignup, validateSignin } from "../../validation/auth"

const Router = express.Router();
/*
Route       /signup
Descrp      Sign Up with emai and Password
Body        credentials
Params      None
Access      Public
Method      POST
*/
Router.post("/signup", async (req, res) => {

    try {
        // validation
        await validateSignup(req.body.credentials);
        
        // check whether email exist
        await UserModel.findByEmailAndPhone(req.body.credentials);//using userdefined function in mongoose

        //hash the password  -> through mongoose method
        // save to database
        const newUser = await UserModel.create(req.body.credentials)

        // generate JWT Auth token
        const token = newUser.generateJwtTokens();

        // return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route       /signin
Descrp      Sign in with email and Password
Body        credentials
Params      None
Access      Public
Method      POST
*/
Router.post("/signin", async (req, res) => {
    try {
        // validation
        await validateSignin(req.body.credentials);

        // check whether user exist
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);//using userdefined function in mongoose

        //hash the password  -> through mongoose method
        // save to database


        // generate JWT Auth token
        const token = user.generateJwtTokens();

        // return
        return res.status(200).json({ token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route       /google
Descrp      google signin
Params      None
Access      Public
Method      GET
*/
Router.get(
    "/google",
    passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    })
);


/*
Route       /google/callback
Descrp      google signin
Params      None
Access      Public
Method      GET
*/
Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.json({ token: req.session.passport.user.token });
    }
);




export default Router;
