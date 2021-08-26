import express from "express";




// Models
import { ReviewModel } from "../../database/allModels"


// validation
import { validateReviewId, validateReviewObject } from "../../validation/reviews";

const Router = express.Router();

/*
Route       /new
Descrp      add a review
Body        review object
Params      none
Access      Public
Method      POST
*/
Router.post("/food/new/", async (req, res) => {
    try {
        // validation
        await validateReviewObject(req.body);

        const { reviewData } = req.body;
         await ReviewModel.create(reviewData);

         return res.json({message : "review created successfully"});

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route       /delete/:_id
Descrp      delete a review 
Body        review object
Params      _id
Access      Public
Method      DELETE
*/
Router.delete("/delete",async (req,res) =>{
    try {
        // validation
        await validateReviewId(req.params);

        const{_id} = req.params;

        await ReviewModel.findByIdAndDelete(_id);


        return res.json({message : "review deleted!! successfully"});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})




export default Router;
