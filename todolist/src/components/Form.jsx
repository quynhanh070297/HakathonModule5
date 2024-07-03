import React, { useState } from 'react'

export default function Form({creatTodo}) {
    const [value , setValue] = useState('');
    const handelSubmit = (e) =>{
        e.preventDefault()
        creatTodo(value); 
        setValue('')
    }
    

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handelSubmit} >
        <input type="text" className='outline-none bg-transparent border border-gray-500 py-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300 ' placeholder='Thêm công việc hôm nay?'
         onChange={(e)=>setValue(e.target.value)} value={value} />
        <button className='bg-gray-500 border-none p-2 text-white cursor-pointer rounded ml-2'>
            Thêm mới
        </button>
    </form>
  )
}
