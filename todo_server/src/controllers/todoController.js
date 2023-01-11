import { json } from "sequelize";
import Todos from "../models/todo"


export const addNewTodo = async(req,res,next) =>{

    const {name, date, time, note} = req.body;

    try {
        const result = await Todos.create(req.body);
        if(result){
            res.status(201).json({message:'Todo Saved Successfully',status:true});
        }
        else{
            res.status(201).json({message:'Server failed to add new todo....',status:false})
        }
        
    } catch (error) {
        res.status(400).json({error: error});
    }

}

export const getAllTodo = async(req,res,next) => {
    try {
        const result = await Todos.findAll();
        if(result){
            res.status(201).json(result);
        }
        else{
            res.status(201).json({message:'Data Not found',status:false})
        }
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export const updateTodo = async(req,res,next) => {
    try {
        const result = await Todos.create(req.body);
        if(result){
            res.status(201).json({message:'Todo Saved Successfully',status:true});
        }
        else{
            res.status(201).json({message:'Server failed to add new todo....',status:false})
        }
        
    } catch (error) {
        res.status(400).json({error: error});
    }
}