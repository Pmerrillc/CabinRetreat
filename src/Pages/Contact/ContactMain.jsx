import React from 'react';
import ContactForm from './Contact';
import ContactText from './ContactText';
import VerticalDivider from '../../reusable/VerticalDivider';
import { Element } from 'react-scroll';

const ContactMain = () => {
  return (
    <Element name='section3'>
    <div className="min-h-[100vh] flex flex-col lg:flex-row justify-center items-center w-full px-10 space-y-10">
      <div className="w-full lg:w-1/2 flex justify-start relative">
        <ContactForm />
      </div>
      <VerticalDivider />
      <div className="w-full lg:w-1/2 flex justify-start relative">
        <ContactText />
      </div>
    </div>
    </Element>
  );
};

export default ContactMain;
