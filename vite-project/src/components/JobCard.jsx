import { Card, CardContent } from '@mui/material'
import React from 'react'

function JobCard() {
  return (
    <div>
      <div className='border-2 border-gray-200 shadow-xl min-w-72 p-4 min-h-[500px] rounded-xl' >
               <div>
                   <div className='flex justify-start gap-4 items-center'>
                    <img className='h-12' src="https://logo.clearbit.com/dropbox.com" alt="" />
                    <div >
                      <p className='text-gray-400 '>Dropbox</p>
                      <p className='text-gray-700 text-lg font-semibold'>Job Role</p>
                      <p className='text-gray-600 text-sm'>Location</p>
                    </div>
                   </div>

                   <div className='py-2 text-gray-500'>
                    <span>Estimeted Salery: ₹19-22LPA ✅</span>
                   </div>

               </div>
      </div>
    </div>
  )
}

export default JobCard