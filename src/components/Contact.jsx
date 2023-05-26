import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-center text-4xl py-4 font-bold text-[#ffbe6e]'>Contact me</h1>
        <form action='' method='POST' encType='multipart/form-data'>
            <div>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Your name' className='mx-6'/>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" placeholder='Phone number'/>
                </div>
                <div>
                    <label>Name</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact