import React from 'react';

const ContactForm = () => {
    return (
        <div className="flex justify-start items-center shadow-md bg-white">
            <form className="bg-white p-8 rounded-lg w-full max-w-lg h-[70vh]">
                <h1 className="text-3xl font-bold mb-4">Contact us</h1>
                <p className="mb-6 text-gray-600">Get in touch with us for any questions</p>
                <div className='flex flex-row items-center justify-center gap-8'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                            First name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="lastName"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-[#76422C] text-white font-bold rounded-md hover:bg-brown-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
