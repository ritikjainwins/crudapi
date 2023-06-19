const ValidationForPost = require("../routers/validation/");

const validateEmp = (schema) =>{
    return async(req,res,next)=>{
    const validateData =  schema.validate(req.boby);
    // console.log(validateData);
    if(validateData.error){
        res.status(403).send(validateData);
    }
    else{
        next();
    }
    }
} 

module.exports = {validateEmp,ValidationForPost}