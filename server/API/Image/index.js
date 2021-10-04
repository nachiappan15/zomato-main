import express from "express";

const Router = express.Router();

import { ImageModel } from "../../database/allModels";
/*
Route           /
Descrp          get image details
Params          _id
Access          public
Method          GET

*/
Router.get("/", async (req, res) => {
    try {
        const image = await ImageModel.findById(req.params._id);

        return res.json({image})
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;