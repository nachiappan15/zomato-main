import express from "express";


// database models
import { RestaurantModel } from "../../database/allModels";



// validations

import { validateRestaurantCity ,validateRestaurantSearchString} from "../../validation/restaurant";
import { validateRestaurantId } from "../../validation/food"

const Router = express.Router();

/*
Route       /
Descrp      get all restaurant details based on city
Query       city
Params      None
Access      Public
Method      GET
*/


Router.get("/", async (req, res) => {
    try {
        // validation
        await validateRestaurantCity(req.query);


        const { city } = req.query;
        const allRestaurants = await RestaurantModel.find({ city });
        return res.json({ allRestaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});

/*
Route       /:_id
Descrp      get individual restaurant details based on id
Body        none
Params      _id
Access      Public
Method      GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        // validation
        await validateRestaurantId(req.params);

        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);

        if (!restaurant) { return res.status(404).json({ error: "Restaurant Not Found!!" }) };
        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /search
Descrp      get individual restaurant details based on id
Body        searchString
Params      none
Access      Public
Method      GET
*/

Router.get("/search", async (req, res) => {
    try {
        // validation
        await validateRestaurantSearchString(req.body);


        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: {
                $regex: searchString,
                $options: "i"
            }
        });
        if (!restaurants) { return res.status(404).json({ error: `No Restaurant is matched with the input ${searchString}!!` }) };
        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }


});



export default Router;