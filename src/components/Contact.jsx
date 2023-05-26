import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1080] bg-[#fcba03]'>
        
        <div id="contact" className='max-w-[1040px] m-auto md:px-20 rounded-xl p-4 py-16'>
        <h1 className='text-center text-4xl w-full py-4 font-bold text-black my-2'>Contact me</h1>
        <form action='https://getform.io/f/c819cd97-3838-4f40-8b33-0503adb70a0d' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-4'>
                <div className='border-2 border-black rounded-lg p-4'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' placeholder='Your name' />
                </div>
                <div className='border-2 border-black rounded-lg p-4'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' placeholder='Phone number' />
                </div>
            </div>
            <div className='border-2 border-black rounded-lg p-4'>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='email' placeholder='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' placeholder='' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} name='message'></textarea>
                </div>
                <button className='send-button text-black border-2 border-black'>
                    Send Message
                </button>
            </div>
        </form>
    </div>
    </div>
    
  )
}

export default Contact