import express from "express";




// Models
import { UserModel } from "../../database/allModels"

// validation
import { validateUserData, validateUserId } from "../../validation/user";

const Router = express.Router();

/*
Route       /
Descrp      get user data
Body        none    
Params      _id
Access      Public
Method      GET
*/

Router.get("/:_id", async (req, res) => {
    try {
        //validation
        await validateUserId(req.params)


        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /update/:id
Descrp      update user data
Body        userData    
Params      _id
Access      Public
Method      PUT
*/

Router.get("/update/:_id", async (req, res) => {
    try {
        //validation
        await validateUserId(req.params);
        await validateUserData(req.body);

        const { _id } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(_id, {
            $set: userData
        }, { new: true });

        return res.json({ user: updateUserData })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;