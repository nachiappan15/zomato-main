import Joi from "joi";

// reviewData
export const validateReviewObject = (reviewData) => {
    const Schema = Joi.object({
        food: Joi.string(),

        restaurants: Joi.string(),

        user: Joi.string(),

        rating:Joi.number(),

        reviewText: Joi.string().required(),

        isFoodReview:Joi.boolean(),

        isRestaurantReview:Joi.boolean(),

        photos: Joi.array().items(Joi.object({
            _id:Joi.string()
        })),

    })
    return Schema.validateAsync(reviewData);
};

// _id
export const validateReviewId = (reviewId) => {
    const Schema = Joi.object({
        _id: Joi.string()
    })
    return Schema.validateAsync(reviewId);
};
