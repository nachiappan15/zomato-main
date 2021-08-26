import express from "express";

const Router = express.Router();

// Models
import { FoodModel } from "../../database/allModels";

//VALIDATIONS
import { validateRestaurantId,validateRestaurantCategory } from "../../validation/food";




/*  
Route       /r/:_id
Descrp      get all foods based on restaurant
Params      _id
Access      Public
Method      GET
*/



Router.get("/r/:_id", async (req, res) => {
    try {
        // validation
        await validateRestaurantId(req.params);
        const { _id } = req.params;
        
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
});



/*
Route       /r/:category
Descrp      get all foods based on category
Params      category
Access      Public
Method      GET
*/


Router.get("/r/:category", async (req, res) => {

    try {
        // VALIDATION
        await validateRestaurantCategory(req.params);

        const { category } = req.params;
        const food = await FoodModel.find({
            category:
            {
                $regex: category,
                $option: "i"
            }
        });

        return res.json({ food });
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }

});

export default Router;