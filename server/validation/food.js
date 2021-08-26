import Joi from "joi";

// ID
export const validateRestaurantId = (resId) => {
    const Schema = Joi.object({
        _id:Joi.string().required()
    })
    return Schema.validateAsync(resId);
};


// CATEGORY
export const validateRestaurantCategory = (category) => {
    const Schema = Joi.object({
        category:Joi.string().required()
    })
    return Schema.validateAsync(category);
};
