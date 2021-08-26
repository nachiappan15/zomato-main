import Joi from "joi";

// _id
export const validateUserId = (userId) => {
    const Schema = Joi.object({
        _id: Joi.string()
    })
    return Schema.validateAsync(userId);
};

// userData
export const validateUserData = (userData) => {
    const Schema = Joi.object({
        fullName: Joi.string().required().min(5),

        email: Joi.string().email().required(),

        password: Joi.string().min(5),

        address: Joi.array().items(Joi.object({
            detail: Joi.string(),
            for: Joi.string()
        })),

        phoneNumber: Joi.number()


    })
    return Schema.validateAsync(userData);
};
