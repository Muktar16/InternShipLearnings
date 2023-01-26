import Joi from "joi";

export const signUpValidator = (req,res,next) =>{
    const schema = Joi.object({
        userName: Joi.string().required().error(new Error('Please provide your user name!')),
        email: Joi.string().email().required().error(new Error('Please provide your email!')),
        password: Joi.string()
          .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
          .required()
          .error(new Error('Please provide your password!')),
    });

    const {error} = schema.validate(req.body,{abortErly:false})
    if(error){
        res.status(422).json(error.message)
    }
    else{
        next()
    }
}

export const validateAddTodo = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    date: Joi.date().required().greater(Date.now()),
    time:Joi.string().required().pattern(new RegExp('^([1-9]|0[1-9]|1[0-2]):[0-5][0-9] ([AaPp][Mm])$')),
    note:Joi.string().optional()
})

