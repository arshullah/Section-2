'use client';

import React from 'react'
const EventHandling = () => {

    const previewImange = (e) => {

        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onload = (data) => {
            const img = new Image();
            img.src = data.target.result;
            document.body.appendChild(img);

        }
        reader.readAsDataURL(file);
    }

    return (
        <div>


            <div className='container mx-auto my-5 '>
                <h1 className='mt-4 font-bold text-3xl text-center'> EventHandling</h1>

                <button

                    onClick={() => { alert('button was clicked') }}

                    className='p-3 border bg-gray-300'>Click Event</button>

                <input

                    onChange={(e) => { console.log(document.body.style.backgroundColor = e.target.value); }}

                    className='mt-5 block' type="color" />

                {/* file read krne ka tarika */}

                <input type='file' onChange={previewImange} />

                <input
                onChange={()=>{console.log('value was changed');
                }}
                className='border p-3 w-full mt-5'
                type="text" />
                <input
                onChange={()=>{console.log('value was changed');
                }}
                className='border p-3 w-full mt-5'
                type="text" />

            </div>
        </div>
    )
}

export default EventHandling;