import React from 'react'

const WorkItems = ({year,title,details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-[#dbdb9a]'>
        <li className='mb-10 ml-6 pt-6'>
            <div className='absolute w-3 h-3 rounded-full bg-[#dbdb9a] mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text:sm'>
                <span className='px-2 py-1 mr-2 bg-[#dbdb9a] text-black text-xs rounded-md'>{year}</span>
                <span className='font-bold text-lg'>{title}</span>
            </p>
            <p className='mt-2'>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItems