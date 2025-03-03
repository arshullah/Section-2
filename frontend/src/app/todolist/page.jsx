'use client';
import React, { useState } from 'react'

const TodoList = () => {

    // let count =0;  //update krte k liye koi vapue

    // const [count, setCount] = useState(0);  //count krne ke liye

    const [taskList, setTaskList] = useState([]);  //tasklist read ke liye settasklist update karne ke liye


    const addNewTask = (e) => {

        if (e.code === 'Enter') {
            if (!e.target.value) {
                alert('Please enter a task to add');
                return; 


            }

            console.log(e.target.value);

            const newTask = { text: e.target.value, completed: false }; //add krne ke liye new array
            setTaskList([newTask, ...taskList]); /// newtask tasklist ko aage piche bhi likh sakte hai ... 3dots new array ko add karne me help karta h ...jsx ka spread operator hai

            e.target.value = "";  //clear input field

        }
        // console.log(e.code);  //keyme type pta chalega code me key ka naam pta chalega space tab enter ye sab kon si press hui hai pta chal jayega


    }

    // /delete krne ke liye 

    const deleteTask = (index) => {
        console.log(index);

        const temp = taskList;
        temp.splice(index, 1);
        setTaskList([...temp]);
    };

    // update kre ya complete kre 

    const updateTask = (index) => {

        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTaskList([...temp]);
    }


    return (
        <div className='bg-gray-300 h-screen pt-10'>

            <div className='container mx-auto rounded-lg bg-white border'>
                <h1 className='text-center text-3xl font-bold '>Todo List</h1>
                <div className='p-4 border shadow-lg rounded-lg'>
                    {/* <h1 className='text-3xl'>{count}</h1> */}
                    {/* <button onClick ={()=>{setCount(count+1); console.log(count);}}  >Add count</button> */}
                    <input
                        onKeyDown={addNewTask}  //jsx me javascript insert krna hai to {} curly bracket lgate h important
                        placeholder='Enter a Task to add in your todolist' type="text"
                        className='px-3 py-2 rounded w-full bg-gray-200' />
                </div>
                <div className='p-4'>
                    {
                        taskList.map((task, index) => {  //key niche nhi likhenge tb bhi chalega
                            return <div key={index} className='rounded mb-4 p-4 border shadow'>

                                {task.completed ? (
                                    <p className='bg-green-700 text-white w-fit rounded-full px-2'>Completely</p>
                                ) : (
                                    <p className='bg-yellow-700 text-white w-fit rounded-full px-2'>Pending</p>
                                )}

                                <p className='text-xl'>{task.text}</p>
                                <div className='mt-5 flex gap-5'>
                                    <button onClick={() => { deleteTask(index) }} className='bg-red-500 text-white rounded-full px-3 py-1'>Delete</button>
                                    <button onClick={() => { updateTask(index) }} className='bg-blue-500 text-white rounded-full px-3 py-1'>Complete</button>
                                </div>

                            </div>
                        })  //anfn likhne se (()=>{}) ye sab ek sath ban jata hai
                    }

                </div>

            </div>

        </div>  //statemanagement pop up dikhata h bina page load kiye 
    )
}

export default TodoList;