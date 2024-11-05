'use client';

import React from 'react'
const EventHandling = () => {
    return (
        <div>


            <div className='container mx-auto my-5 bg-black'>
                <h1 className='mt-4 font-bold text-3xl text-center'></h1>

                <button

                    onClick={() => { alert('button was clicked') }}

                    className='p-3 border bg-gray-300'>Click Event</button>

<input 

onChange={(e) =>{console.log(document.body.style.backgroundColor = e.target.value);}}

className='mt-5 ' type="color" />

            </div>
        </div>
    )
}

export default EventHandling