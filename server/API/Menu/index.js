import express from "express";


// models
import { MenuModel, ImageModel } from "../../database/allModels";


// validation
import {validateMenuId ,validateImageId} from "../../validation/menu"
const Router = express.Router();

/*
Route       /list/:_id
Descrp      get all menu list based on id 
Params      _id
Access      Public
Method      GET
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        //validation
        await validateMenuId(req.params);

        const { _id } = req.params;
        const menuList = await MenuModel.findOne(_id);

        return res.json({ menuList });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

});


/*
Route       /image/_id
Descrp      get all menu images based on id 
Params      _id
Access      Public
Method      GET
*/

Router.get("/image/_id",async (req, res) => {
    try {
        //validation
        await validateImageId(req.params);

        const { _id } = req.params;
        const imageList = await ImageModel.findOne(_id);

        return res.json({ imageList });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;