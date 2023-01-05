import mongoose from 'mongoose';

var TodoSchema = new mongoose.Schema({
    todoId:{type:String, required: "todoID must be provided", unique: true},
    name: {type: String, required: 'Name Field can\'t be empty',},
    priority: {type: String, required: 'Todo Priority can\'t be empty', unique: true},
    date:{type: Date, required: 'date can\'t be empty'},
    // time: {type: Sequelize.TIME}
});

if(!mongoose.models.Todo){
    mongoose.model('Todo',TodoSchema);
}

export default mongoose.models.Todo;