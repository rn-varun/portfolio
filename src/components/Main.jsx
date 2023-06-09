import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


const Main = () => {
    return (
        <div id='home'>
            <img className='w-full h-screen object-cover object-left' src="https://cdn.wallpapersafari.com/40/43/iVjfb2.png" alt="background" />
            <div className='w-full h-screen absolute top-0 left-0'>

                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-white'>Hey, I'm <span className='text-6xl text-white'>Varun</span></h1>
                    <h3 className='py-2 text-red-800 sm:text-2xl'>やあ、私はヴァルンです</h3>
                    <h2 className='sm:text-3xl text-2xl font-extralight text-white mt-1'>I'm a 
                        <TypeAnimation
                            sequence={[
                                'Coder', // Types 'One'
                                500, // Waits 1s
                                'Developer', // Deletes 'One' and types 'Two'
                                500, // Waits 2s
                                'Tech Enthusiast',
                                500, // Types 'Three' without deleting 'Two'
                                'Weeb',
                                500,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    
                    <div className='flex mt-2 max-w-[200px] space-x-2'>
                        <a href="https://github.com/rn-varun">
                            <AiFillGithub className="cursor-pointer" size={30} />
                        </a>
                        <a href=''>
                            <AiFillLinkedin className="cursor-pointer pl-1" size={32} />
                        </a>
                        <a href=''>
                            <AiOutlineTwitter className="cursor-pointer pl-1" size={34} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main