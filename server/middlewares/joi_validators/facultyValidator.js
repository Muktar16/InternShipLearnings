import Joi from 'joi';

export const facultyValidator = (req,res,next)=> {

    const schema = Joi.object().keys({
        name:Joi.string().required().min(5).max(30),
        designation:Joi.string().required(),
        image:Joi.string().required(),
        qualification:Joi.string().optional(),
        email:Joi.string().optional().email({minDomainSegments:2,tlds:{allow:['com','bd']}}),
        phone:Joi.string().optional().pattern(new RegExp(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/)),
        publications:Joi.array().items(Joi.object().keys({
            title:Joi.string(),
            description:Joi.string(),
            link:Joi.string()
        })).optional(),
        profiles:Joi.object().keys({
            linkedInProfile:Joi.string().optional(),
            facebookProfile:Joi.string().optional(),
            googleScholarProfile:Joi.string().optional(),
            rechargeGateProfile:Joi.string().optional(),
            dblpProfile:Joi.string().optional(),
        })
    })

    const {error} = schema.validate(req.body,{abortErly:false})
    if(error){
        res.status(422).json(error)
    }
    else{
        next()
    }
}
