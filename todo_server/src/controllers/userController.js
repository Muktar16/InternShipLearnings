import Users from "../models/user";
import moment from 'moment';
import bcrypt from 'bcryptjs';
import validate from "deep-email-validator";
import otpGenerator from 'otp-generator'
import {sendConfirmationEmail} from '../config/nodemailer.config';
import createJWT from "../utils/createJWT";


export const signUp = async(req,res) => {
    try{
        //check if user already exists
        const user = await Users.findOne({where:{email: req.body.email}});
        if (user && user.status=="Active") {
            return res.status(422).send('Email already registered!! Please log in')
        }
        // check if already pending user is saved
        else if(user && user.status=="Pending"){
            let isMailSent = await sendConfirmationEmail(
                req.body.userName,
                req.body.email,
                otpGenerator.generate(6,{
                    upperCaseAlphabets: true,
                    specialChars: false
                }
            ));
            if(!isMailSent){
                return res.status(422).send("Something went wrong while sending confirmation mail. Please Try again.");
            }
            else{
                Users.update({otp_expire:Date.now()},{where:{confirmationCode:user.confirmationCode}})
                return res.status(200).send(`You have already a pending request. We have resent a confirmation email. <h1>Please check your email Inbox </h1> <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">goto email inbox<a>`)
            }
        }

        else if(!((await validate(req.body.email)).valid)){
            return res.status(422).send("This email address doesn't exist. Please try with a valid email")
        }

        const newUser = {
            userName:req.body.userName,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password, 12),
            confirmationCode: otpGenerator.generate(6,{
                upperCaseAlphabets: true,
                specialChars: false
            }),
            otp_expire: Date.now()
        }

        let isMailSent = await sendConfirmationEmail(newUser.userName,newUser.email,newUser.confirmationCode);
        if(!isMailSent){
            return res.status(422).send("Something went wrong while sending confirmation mail. Please Try again.")
        }
        const result = await Users.create(newUser);
        if(result) {
            return res.status(200).send("User saved successfully. Please check your email to confirm registration")
        }
         else res.status(422).send("Registration failed. Please try again");

    } catch (error) {
        return res.status(422).send("Something went wrong with the server");
    }       
}

export const confirmOTP = async(req,res) => {
    const confirmationCode = req.query.otp;
    const user = await Users.findOne({where:{confirmationCode:confirmationCode}});

    if(user && user.status=="Pending"){
        if(moment(new Date()).diff(moment(user.otp_expire),"minutes")>2){

            return res.send(`OTP Expired. <a href="http://192.168.0.140:5432/api/v1/user/resendOtp/${confirmationCode}">click here to resend mail</a>`);
        }
        Users.update(
            {status:"Active",otp_expire:null,confirmationCode:null},
            {where:{ confirmationCode: confirmationCode}}
        ).then(()=>{ 
            res.status(200).json({status:true,message:"User otp Confirmed"})
        }).catch((e)=>{
            res.status(422).json({status:false,message:"Error occured while updating user status"})
            console.log(e)
        })
    }
    else{
        return res.status(422).json({status:false,message:"User not found. May be your otp has been expired."})
    }
}


export const resendOTP = async(req,res)=>{
    const confirmationCode =req.params.otp;
    const user = await Users.findOne({where:{confirmationCode:confirmationCode}});
    if(user){
        let isMailSent = await sendConfirmationEmail(user.userName,user.email,user.confirmationCode);
        if(!isMailSent){
            return res.status(422).send("Oops!!! Something went wrong while sending confirmation mail. Please Try again.")
        }
        Users.update(
            {otp_expire:Date.now()},
            {where:{ confirmationCode: confirmationCode}}
        ).then(()=>{ 
            res.status(200).send("Otp send to email")
        }).catch((e)=>{
            res.status(422).send("Error occured while updating user status")
        })
    }
    else return res.status(422).send("User not found")
}



export const signIn = async (req,res) => {
    const user = await Users.findOne({where:{email:req.body.email}});
    if(!user){
        return res.status(422).send("User not registered. Please sign up first")
    }
    if ( user && user.status != "Active") {
        return res.status(422).send("Pending Account. Please Verify Your Email!");
    }
    if(user && bcrypt.compareSync(req.body.password,user.password)){
        return res.status(200).json({status:true,message:"Login Successfull",token:createJWT({user_id:user.id,email:user.email})})
    }
    else return res.status(422).send("Password Wrong");
}