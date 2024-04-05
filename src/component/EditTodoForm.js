import React, {useState} from 'react'
export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input text="text" value={value} className='todo-input' placeholder='Update task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}


