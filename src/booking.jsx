import React, { useState } from 'react';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [propertyId] = useState('440616');
  const [message, setMessage] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
  
    if (!checkInDate || !checkOutDate || !guests) {
      setMessage('Please fill in all the fields');
      return;
    } 
    try {
      const checkoutUrl = new URL(`https://checkout.lodgify.com/riversresortrentals/${propertyId}/reservation`);
  
      // Add necessary query parameters
      checkoutUrl.searchParams.append('currency', 'USD');
      checkoutUrl.searchParams.append('guests', guests);
      checkoutUrl.searchParams.append('arrival', checkInDate);  // Correct parameter for check-in
      checkoutUrl.searchParams.append('departure', checkOutDate); // Correct parameter for check-out
      
      // Include any additional query parameters
      checkoutUrl.searchParams.append('_gl', '1*18fnl19*_ga*NDE2ODUyMDgyLjE3MTkwNjgzMzU.*_ga_GTQS7L994W*MTcyOTQ0NzQzMy44LjAuMTcyOTQ0NzQzMy4wLjAuMA..');
  
      // Redirect user to the Lodgify checkout URL
      window.location.href = checkoutUrl.toString();
    } catch (error) {
      console.error('Error redirecting to Lodgify checkout:', error);
      setMessage('Error during redirection');
    }
  };
  
  return (
    <div className="md:mt-[20vh] h-50vh md:h-[70vh] flex items-center justify-center bg-white">
  <form
    onSubmit={handleBooking}
    className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md"
  >
    <h2 className="text-2xl font-bold mb-6">Dates</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium mb-1">Check-in Date:</label>
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Check-out Date:</label>
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Guests:</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
          className="w-full border border-gray-300 rounded-lg p-2"
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
    >
      Continue
    </button>

    {message && (
      <p className="mt-4 text-center text-gray-700">{message}</p>
    )}
  </form>
</div>
  );
};

export default BookingForm;
