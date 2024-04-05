import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditTodoForm from './EditTodoForm'
export const Todo = ({task, toggleComplete, deleteTodo, EditTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : "incompleted"}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => EditTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}


