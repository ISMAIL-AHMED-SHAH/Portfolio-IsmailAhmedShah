import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold pb-1'>Let's Work Together</h1>
      <p className='text-gray-200 mt-3 lg:text-base text-xs md:sm'>I'm excited to learn more about your vision and how I can leverage my expertise to deliver a tailored web solution that exceeds your expectations. Whether you're looking to enhance your existing digital footprint or kickstart a new online venture, I'm here to guide you through the process and bring your ideas to life.</p>
      {/* Input fields */}
      <form className='mt-8 block w-full overflow-hidden'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <input type='text' placeholder='First Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
          <input type='text' placeholder='Last Name' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
        </div>
        <div className='flex mt-5 flex-col md:flex-row items-center justify-between gap-4'>
          <input type='email' placeholder='Email Address' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
          <input type='text' placeholder='Phone Number' className='flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full' />
        </div>

        <div>
          <select className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none'>
            <option value="" disabled selected>How can I assist you?</option>
            <option value="frontend">Frontend Development</option>
            <option value="backendend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
            <option value="other">Other</option>
          </select>
        </div>
        <textarea className='w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none' rows={7} placeholder='Share your vision and requirements'>
        </textarea>
        <div className='mt-4'>
          <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'>
            Let's Get Started
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm