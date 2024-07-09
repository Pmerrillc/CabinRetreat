import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_jwqyjvs', 'template_sl12c4f', form.current, 'RpifWbH2AngTMolk3')
        .then(
            (result) => {
                console.log('SUCCESS!', result.text);
                form.current.reset();
                alert("We'll get back to you shortly.");  
            },
            (error) => {
                console.log('FAILED...', error.text);
            }
        );
    };
    
    return (
        <div className="flex justify-start items-center shadow-md bg-white">
            <form className="bg-white p-8 rounded-lg w-full max-w-lg h-[70vh]" ref={form} onSubmit={sendEmail}>
                <h1 className="text-3xl font-bold mb-4">Contact us</h1>
                <p className="mb-6 text-gray-600">Get in touch with us for any questions</p>
                <div className='flex flex-row items-center justify-center gap-8'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="from_firstname"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            name="from_lastname"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="from_email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    value="Send"
                    className="w-full py-2 px-4 bg-[#76422C] text-white font-bold rounded-md hover:bg-brown-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
