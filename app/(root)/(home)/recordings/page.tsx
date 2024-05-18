import CallList from '@/components/CallList'
import React from 'react'

const Recordings = () => {
  return (
    <>
      <div className='bg-lighthouse bg-no-repeat bg-cover flex items-center justify-center text-center lg:h-80 rounded-2xl recording-bg'>
        <h1 className='text-3xl font-bold text-sky-1'>
          Recordings
        </h1>
      </div>
      <section className='flex size-full flex-col gap-10 mt-5 text-white'>
        <h1 className='text-3xl font-bold text-sky-1 sm:hidden recording-text'>
          Recordings
        </h1>
        <CallList type='recordings' />
      </section>
    </>
  )
}

export default Recordings