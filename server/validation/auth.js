import Joi from "joi";


// SIGNUP
export const validateSignup = (userData) => {
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
}

// SIGNIN
export const validateSignin = (userData) => {
    const Schema = Joi.object({

        email: Joi.string().email().required(),

        password: Joi.string().min(5).required(),

    })

    return Schema.validateAsync(userData);
}