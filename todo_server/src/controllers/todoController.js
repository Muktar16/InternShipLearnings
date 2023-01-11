import Todos from "../models/todo"


export const addNewTodo = async(req,res,next) =>{

    const {name, date, time, note} = req.body;

    try {
        const result = await Todos.create(req.body);
        if(result){
            res.status(201).send("Todo created Successfully")
        }

        
    } catch (error) {
        console.log(error)
        
    }

}