import Faculty from "../models/faculty.js"

export const addNewFaculty = async(req,res)=>{
    try {
        const result = await Faculty.create(req.body);
        if(result){
            res.status(201).json({message:'Faculty Saved Successfully',status:true});
        }
        else{
            res.status(422).json({message:'Server failed to add new todo....',status:false})
        }
        
    } catch (error) {
        res.status(400).json({error: error});
    }
}