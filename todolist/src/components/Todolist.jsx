import React, { useState } from 'react'
import Form from './Form'
import { Button, Modal } from 'antd';
import {AiFillEdit} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'

export default function Todolist() {
  const [updateIndex,setupdateIndex] = useState(-1)
  const [updateText,setupDateText] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoValue, setTodo] = useState(JSON.parse(localStorage.getItem("todoValue"))||[]); 

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
todoValue[updateIndex].task=updateText
const newTodolist = [...todoValue]
setTodo(newTodolist);
localStorage.setItem("todoValue",JSON.stringify(newTodolist))
setupdateIndex(-1)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setupdateIndex(-1)
    setIsModalOpen(false);}
  


 
    const generateRandomID = () => {
      return `id-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString(36)}`;
    };

    const creatTodo = (todo) => {
      const newTodolist =[...todoValue, { id: generateRandomID(), task: todo, isEditing: false }]
      setTodo(newTodolist);
      localStorage.setItem("todoValue",JSON.stringify(newTodolist))
    };
    const deleteTodo = (id) =>{
const newTodolist= todoValue.filter((todo)=>{
  return todo.id!==id;
})

setTodo(newTodolist);
localStorage.setItem("todoValue",JSON.stringify(newTodolist))
    
    }
  
    const handleUpdate = (index)=>{
      setupDateText(todoValue[index].task)
      setupdateIndex(index)
      showModal()
    }
    const handleChange = (e) =>{

      setupDateText(e.target.value)
    }
  return (
    <div className='container bg-gray-700 mt-20 p-8 rounded-md'>


        <Form creatTodo = {creatTodo}/>
        {
          todoValue.map((todo,idx)=>
          <div className='flex justify-between  items-center bg-gray-500 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
            <input type='checkbox'/>
            <p className='font-primary '>{todo.task}</p>
            <div className=' flex items-center gap-x-4'>
                <AiFillEdit className='text-xl' onClick={()=>handleUpdate(idx)}/>
                <BsFillTrashFill className='text-xl '  onClick={()=>deleteTodo(todo.id)}/>
            </div>

        </div>) 
        }
      <Modal title="Sửa Công việc" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <input className='bg-slate-400 w-[100%] rounded' type="text" value={updateText} onChange={handleChange}/>
      </Modal>
    </div>
  )
}
