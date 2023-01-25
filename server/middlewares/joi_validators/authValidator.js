import Joi from 'joi';

export const authValidator = (req,res,next)=> {

    const schema = Joi.object().keys({
        email:Joi.string().required().email({minDomainSegments: 2,tlds: {allow:['com','bd']}}),
        password:Joi.string().required().min(5).max(10).alphanum()
    })

    const {error} = schema.validate(req.body,{abortErly:false})
    if(error){
        res.status(422).json(error)
    }
    else{
        next()
    }
}