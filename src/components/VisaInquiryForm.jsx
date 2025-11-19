import React, { useState } from "react";

const VisaInquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    residence: "",
    visaType: "",
    destination: "",
    travelDate: "",
    purpose: "",
    comments: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-blue-900 flex items-center justify-center px-6 py-12">
      {/* Base dot grid pattern */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px), radial-gradient(#ffffff 1.5px, transparent 1.5px)',
             backgroundSize: '25px 25px',
             backgroundPosition: '0 0, 12.5px 12.5px',
             opacity: 0.1
           }}
      />

      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Top Left Pattern */}
        <div className="absolute top-[5%] left-[10%]">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
            <circle cx="50" cy="50" r="35" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
          </svg>
        </div>

        {/* Top Right Pattern */}
        <div className="absolute top-[15%] right-[10%]">
          <svg className="w-40 h-40" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
          </svg>
        </div>

        {/* Bottom Left Pattern */}
        <div className="absolute bottom-[10%] left-[15%]">
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
          </svg>
        </div>

        {/* Bottom Right Pattern */}
        <div className="absolute bottom-[20%] right-[12%]">
          <svg className="w-28 h-28" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
            <circle cx="50" cy="50" r="30" stroke="#ffffff" strokeWidth="1.5" fill="none" className="opacity-10"/>
          </svg>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-[40%] left-[5%]">
          <svg className="w-16 h-16 opacity-10" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>

        <div className="absolute bottom-[35%] right-[8%]">
          <svg className="w-16 h-16 opacity-10 rotate-45" viewBox="0 0 24 24" fill="#ffffff">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>
      </div>

      {/* Curved lines */}
      {[0, 1, 2].map((_, idx) => (
        <div
          key={idx}
          className={`absolute w-64 h-64 opacity-5 ${
            idx === 0 ? 'bottom-0 left-0' : idx === 1 ? 'top-0 right-0 rotate-180' : 'top-1/4 left-1/4 rotate-45'
          }`}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,90 Q40,40 90,10" stroke="white" fill="transparent" strokeWidth="2" />
          </svg>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative w-full max-w-4xl px-6 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-3">Visa Inquiry Form</h2>
        <p className="text-gray-200 text-center text-lg mb-8">Fill in your details to submit a visa inquiry</p>
        
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your nationality"
              />
            </div>

            <div>
              <label htmlFor="visaType" className="block text-sm font-medium text-gray-700 mb-1">Visa Type</label>
              <select
                id="visaType"
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                <option value="">Select Visa Type</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Business Visa">Business Visa</option>
                <option value="Work Permit">Work Permit</option>
                <option value="Family Visa">Family Visa</option>
                <option value="Medical Visa">Medical Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>

            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Destination Country</label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Enter destination country"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700 mb-1">Purpose of Travel</label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Describe your travel purpose"
              />
            </div>

            <div className="col-span-2 flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-600"
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I agree to be contacted regarding my visa inquiry
              </label>
            </div>

            <button 
              type="submit" 
              className="col-span-2 bg-red-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300 mt-4"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisaInquiryForm;
