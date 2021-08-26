import Joi from "joi";

// _id
export const validateMenuId = (menuId) => {
    const Schema = Joi.object({
        _id: Joi.string()
    })
    return Schema.validateAsync(menuId);
};

export const validateImageId = (ImageId) => {
    const Schema = Joi.object({
        _id: Joi.string()
    })
    return Schema.validateAsync(ImageId);
};