import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Upcoming
      </h1>

      <CallList
        type="upcoming"
      />

      <div className='bg-running bg-no-repeat bg-cover absolute bottom-0 right-5 lg:w-[950px] sm:w-[500px] lg:h-[550px] sm:h-[300px] z-[-2]'></div>
    </section>
  )
}

export default Upcoming