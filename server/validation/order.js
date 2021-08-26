import Joi from "joi";

// _id
export const validateUserId = (userId) => {
    const Schema = Joi.object({
        _id: Joi.string()
    })
    return Schema.validateAsync(userId);
};

// new Order
export const validateNewOrder = (orderData) => {
    const Schema = Joi.object({
        user: Joi.string(),

        orderDetails : Joi.array().items(Joi.object({
            food:Joi.string(),

            quantity:Joi.number().required(),

            paymode: Joi.string().required(),

            status:Joi.string(),

            PaymentDetails: Joi.object({
                itemTotal:Joi.number(),

                promo:Joi.number(),

                tax:Joi.number()

            })

        })),

        

    })
    return Schema.validateAsync(orderData);
};
