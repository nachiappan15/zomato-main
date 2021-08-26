import Joi from "joi";


// city
export const validateRestaurantCity = (resCity) => {
    const Schema = Joi.object({
        city: Joi.string().required()
    });

    return Schema.validateAsync(resCity);
};

// Serach string
export const validateRestaurantSearchString = (searchString) => {
    const Schema = Joi.object({
        searchString: Joi.string().required()
    });

    return Schema.validateAsync(searchString);
};