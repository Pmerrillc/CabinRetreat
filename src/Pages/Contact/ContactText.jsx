import React from 'react';

const ContactText = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col h-[70vh] justify-between items-center'>
          <div className='flex flex-row w-full justify-between items-center'>
            <div>
              <h1 className="font-bold text-2xl">Email</h1>
              <p>strawberrycabin10@gmail.com</p>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Phone</h1>
              <p>408-858-5495</p>
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <img 
              src="https://res.cloudinary.com/dkcgwqdmm/image/upload/v1719990083/efilia_image_27_teynzp.jpg" 
              alt="Contact" 
              className='h-[60vh] w-[50vh]  object-cover rounded-lg' 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactText;




