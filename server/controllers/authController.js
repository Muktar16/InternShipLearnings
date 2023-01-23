
import Admin from "../models/admin.js";

export const authenticate = async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    
    Admin.findOne({ email: email },(err, user) => {
        if(user){
          console.log(user);
          if(!user.verifyPassword(password)){
             return res.status(200).json({"status":"false", "message":"Wrong Password"});
          }
          else return res.status(200).json({"status":"true", "token": user.generateJwt()});
        }
        else return res.status(200).json({"status":"false","message":"This is not an Admin email"});
     }
    );
}