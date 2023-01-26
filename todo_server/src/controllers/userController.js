import Users from "../models/user";
import moment from 'moment';
import bcrypt from 'bcryptjs';
import {sendConfirmationEmail} from '../config/nodemailer.config'

export const signUp = async(req,res) => {
    try {
        //check if user already exists
        const user = await Users.findOne({where:{email: req.body.email}});
        if (user) {
            return res.status(409).json({status:false,message:"Email already registered!! "})
        }

        const confirmationCode = Math.floor(100000 + Math.random() * 900000);
        const otp_expire = moment().add(10, 'minutes');
        const newUser = {
            userName:req.body.userName,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            confirmationCode: confirmationCode
        }

        await sendConfirmationEmail(newUser.userName,newUser.email,newUser.confirmationCode);
        const result = await Users.create(newUser);
        if(result) {
            console.log(newUser)
            return res.status(200).json({status:true,message:"User saved successfully. Please check your email to confirm registration"})
        }
         else res.status(422).json({status:false,message:"Registration failed. Please try again"});

    } catch (error) {
        console.log(error)
        return res.status(500).json({status:false,message:"Something went wrong with the server"});
    }       
}


export const signIn = async (req,res) => {
    const user = await Users.findOne({where:{email:req.body.email}});
    if ( user && user.status != "Active") {
        return res.status(401).send({
          message: "Pending Account. Please Verify Your Email!",
        });
    }
}