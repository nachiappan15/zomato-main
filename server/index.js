// importing env variables
require("dotenv").config();


// libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";


 // configs
import googleAuthConfig from "./config/google.config"
import routeConfig from "./config/route.config";

// microservice route
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurant"
import Food from "./API/Food"
import Menu from "./API/Menu"
import Order from "./API/Order"
import Review from "./API/Review"

//database connection

import connectDB from "./database/connection"


const zomato = express();

// middlewares application
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


// passport configuration
googleAuthConfig(passport);
routeConfig(passport);



// Application routes
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/order",Order);
zomato.use("/review",Review);





zomato.get("/", (req, res) => { res.json({ message: "Setup Success" }) });

zomato.listen(4000, () =>
    connectDB().then(() =>
        console.log("Server Running....")).catch(() =>
            console.log("Database not connected !!!!!")));