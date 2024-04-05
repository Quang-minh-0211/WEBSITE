import React, {useState} from 'react'
export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input text="text" value={value} className='todo-input' placeholder='What is the task of to day ? ' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
