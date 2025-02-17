
'use client'
import React, {useState} from 'react'


// const Chatbox,{useState} from 'react'

const Chatbox = () => {


  const [chatList,  setChatList] =useState ([]);
  const addNewchat =(e) => {

    if(e.code === 'Enter'){
      if(!e.target.value){
        alert('please enter a meesage to add');
        return;
      }

      console.log(e.target.value);
      
    }
  }
  return (
    <div className='bg-gray-300 h-screen pt-10'>

      <div className='container mx-auto rounded-lg bg-white border'>

<div className='p-4 border-b-2'>

  <input 
  onKeyDown={addNewchat}

  placeholder='Enter a msg to add in your todolist' type="text"
  className='px-3 py-2 rounded w-full bg-gray-200' />
</div>
      </div>
    </div>
  )
}

export default  Chatbox;