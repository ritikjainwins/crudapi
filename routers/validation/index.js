const joi = require("joi");

const ValidationForPost = joi.object({
    name : joi.string().required().min(3).max(20),
    epmId : joi.number().required(),
    phone_no : joi.number().optional(),
    city : joi.string().optional(),
    create_by : joi.string().required().min(3).max(20)
}); 

const ValidationForPatch = joi.object({
    name : joi.string().optional(),
    epmId : joi.number().optional(),
    phone_no : joi.number().optional(),
    city : joi.string().optional(),
    update_by: joi.string().required().min(3).max(20)
});

module.exports = {ValidationForPost,ValidationForPatch};