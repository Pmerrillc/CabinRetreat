import React from 'react';
import ContactForm from './Contact';
import ContactText from './ContactText';

const ContactMain = () => {
  return (
    <div className='min-h-[70vh] flex flex-col lg:flex-row justify-center items-center w-full px-10'>
        <div className='w-full lg:w-1/2 flex justify-start relative'>
            <ContactForm />
        <div className='border-r border-black h-3/4 top-28 md:block hidden absolute inset-y-0 right-0 transform translate-x-1/2'></div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-start relative'>
            <ContactText />
        </div>
    </div>
  )
}

export default ContactMain;
