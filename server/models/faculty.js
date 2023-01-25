import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  name: String,
  designation: String,
  image: String,
  qualification: String,
  email: String, 
  phone:String,
  publications: [{
    title:String,
    description:String,
    link:String
  }],
  profiles: {
      linkedInProfile:String,
      facebookProfile: String,
      googleScholarProfile: String,
      rechargeGateProfile: String,
      dblpProfile:String
  }
});

const Faculty = mongoose.model('faculty', FacultySchema);
export default Faculty;