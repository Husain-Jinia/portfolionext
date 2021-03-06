import React from 'react'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <div className='mx-3 xl:mx-20 lg:mx-20 md:mx-10'>
        <div className='flex flex-col bg-white-400'>
            <TopHeader/>
            <div className='w-100'>
              <div className='flex flex-col sm:flex-row  justify-between'>
                  <div className='flex flex-col'>
                      <div className='pb-2 text-sm mb-2'>husainjiniaga@gmail.com</div>
                      <div className='flex flex-col'>
                          <div className='text-2xl font-[700]'>/frontend developer</div>
                          <div className='text-2xl font-[700]'>/backend developer</div>
                      </div>        
                  </div>
                  <div className='mt-[2rem] md:mt-5 lg:mt-5 xl:mt-5 flex flex-col'>
                      <div className='text-lg'>
                          I build pretty cool applications
                      </div>
                      <div className='text-lg'>
                          Based in Pune, India. 
                      </div>
                      <div className='flex flex-row mt-5'>
                          <div className='text-xs text-slate-500'>Github</div>
                          <div className='text-xs text-slate-500 mx-3'>LinkedIn</div>
                      </div>
                  </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Header