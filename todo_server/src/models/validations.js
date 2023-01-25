import Joi from 'joi';

export const validateAddTodo = Joi.object().keys({
    name: Joi.string().min(3).max(50).required(),
    date: Joi.date().required().greater(Date.now()),
    time:Joi.string().required().pattern(/^([1-9]|0[1-9]|1[0-2]):[0-5][0-9] ([AaPp][Mm])$/),
    note:Joi.string().optional()
})

// export const validateSignUp = Joi.object({
//   f_name: Joi.string().required().error(new Error('Please provide your first name!')),
//   l_name: Joi.string().required().error(new Error('Please provide your last name!')),
//   email: Joi.string().email().required().error(new Error('Please provide your email!')),
//   phone: Joi.string().required().error(new Error('Please provide your phone!')),
//   password: Joi.string()
//     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
//     .required()
//     .error(new Error('Please provide your password!')),
// });

// export const validateResentOtp = Joi.object({
//   email: Joi.string().email().required().error(new Error('Please provide your email!')),
// });

// export const validateOtpVerification = Joi.object({
//   email: Joi.string().email().required().error(new Error('Please provide your email!')),
//   otp: Joi.string().required().error(new Error('Please provide your otp!')),
// });

// export const validateSignIn = Joi.object({
//   email: Joi.string().email().required().error(new Error('Please provide your email!')),
//   password: Joi.string().required().error(new Error('Please provide your password!')),
// });

// export const validateMfaVerification = Joi.object({
//   id: Joi.number().required().error(new Error('Please provide your info!')),
//   token: Joi.string().required().error(new Error('Please provide your mfa token!')),
// });

// export const validateResetPassword = Joi.object({
//   reset_link: Joi.string().required().error(new Error('Please provide reset link!')),
//   password: Joi.string().required().error(new Error('Please provide your password!')),
// });
