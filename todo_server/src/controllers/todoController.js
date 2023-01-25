
import Todos from "../models/todo";
import {validateAddTodo} from '../models/validations'


export const addNewTodo = async(req,res,next) =>{

    validateAddTodo.validate(req.body,{abortEarly:false})
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
        const result = await Todos.findAll({where:{is_delete:false}});
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



export const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    Todos.update(
        {name:req.body.name,date:req.body.date,time:req.body.time,note:req.body.note},
        {where:{ id: id}}
    ).then(()=>{ 
        res.status(201).json({status:true,message:"Project updated with id "+id})
    }).catch((e)=>{
        res.status(400).json({status:false,message:"Error"})
        console.log(e)
    })
}

export const addToRecycleBin = (req,res)=>{
    const id = parseInt(req.params.id);
    Todos.update({is_delete:true},{where:{id:id}}
    ).then(()=>{
        res.status(201).json({status:true,message:"Project deleted with id"+id})
    }).catch((e)=>{
        res.status(400).json({status:false,message:"error"})
        console.log(e)
    });
}

export const getRecycleBinList = async(req,res)=>{
    try {
        const result = await Todos.findAll({where:{is_delete:true}});
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

export const deleteTodo = async(req,res)=>{
    console.log("Here")
    const id = parseInt(req.params.id)
    console.log("id ",id)
    try {
        const result = await Todos.destroy({where:{id:id}});
        if(result) res.status(201).json(result);
        else res.status(201).json({message:"Data not found",status:false})
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export const deleteAll = async(req,res)=>{
    console.log("Here")
    const id = parseInt(req.params.id)
    console.log("id ",id)
    try {
        const result = await Todos.destroy({where:{is_delete:true}});
        if(result) res.status(201).json(result);
        else res.status(201).json({message:"Data not found",status:false})
    } catch (error) {
        res.status(400).json({error: error});
    }
}

export const restoreTodo = (req, res) => {
    const id = parseInt(req.params.id);
    Todos.update({is_delete:false},{where:{id:id}}
    ).then(()=>{ 
        res.status(201).json({status:true,message:"Project updated with id "+id})
    }).catch((e)=>{
        res.status(400).json({status:false,message:"Error"})
        console.log(e)
    })
}