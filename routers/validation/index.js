const joi = require("joi");

const ValidationForPost = joi.object({
    name : joi.string().required().min(3).max(20),
    epmId : joi.string().required(),
    phone_no : joi.number().optional(),
    city : joi.string().optional()
}); 

module.exports = ValidationForPost;