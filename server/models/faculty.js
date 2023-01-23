import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
    name: String,
    designation: String,
    image: String,
    qualification: String,
    email: String, 
    publications: [],
    profiles: [
      {
        linkedInProfile:String,
        facebookProfile: String,
        googleScholarProfile: String,
        RechargeGateProfile: String,
      }
    ]
});