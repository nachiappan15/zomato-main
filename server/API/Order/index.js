import express from "express";
import passport, { Passport } from "passport";





// Models
import { OrderModel } from "../../database/allModels"

// validation
import { validateUserId, validateNewOrder } from "../../validation/order";

const Router = express.Router();


/*
Route       /:_id
Descrp      Get all orders based on id
Body        none
Params      _id
Access      Public
Method      GET
*/

Router.get("/:_id",
    passport.authenticate("jwt" ,{session:false}),
    async (req, res) => {
        try {
            // validation
            await validateUserId(req.params);

            const { _id } = req.params;
            const getOrders = await OrderModel.findOne({ user: _id });
            if (!getOrders) {
                return res.status(404).json({ error: "USER not Found!!!" });
            }
            return res.json({ orders: getOrders });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    });

/*
Route       /new
Descrp      add new order
Body        order
Params      _id
Access      Public
Method      POST
*/
Router.post("/new/:_id", async (req, res) => {

    try {
        // validation
        await validateUserId(req.params);
        await validateNewOrder(req.body);

        const { _id } = req.params;
        const { orderData } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            { user: _id },
            {
                $push: {
                    orderDetails: orderData
                }
            },
            { new: true });
        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }


})

export default Router;
