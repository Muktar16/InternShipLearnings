import "./NewTodo.css";

function NewTodo(){
    const addNewTodo = ()=>{

    }
    return(
        <>
        <div className="new-todo">
            <form onSubmit={addNewTodo}>
                <div className="inputField-container">
                    <div className="inputField">
                        <label>ToDo Name</label>
                        <input type="text"/>
                    </div>
                    <div className="inputField">
                        <label>ToDo Priority</label>
                        <input type="number" min='1' step="1"/>
                    </div>
                    <div className="inputField">
                        <label>ToDo Date</label>
                        <input type="date"/>
                    </div>
                </div>
                <div className="new-todo_actions">
                    <button type="submit">Create Todo</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default NewTodo;