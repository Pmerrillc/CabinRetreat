import React from 'react';

const Map = () => {
  return (
    <div className="h-60vh">
    <div className="w-full h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25083.435019787103!2d-120.02371096523436!3d38.19992690000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80974903c15a159d%3A0x3a36b889834b770!2sRivers%20Resort%20Cabin%2010!5e0!3m2!1sen!2sin!4v1720065465074!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default Map;
