import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-center max-w-2xl mx-auto">
        Have questions? Get in touch with us using the form below or reach out via email or phone.
      </p>

      <form className="max-w-lg mx-auto mt-8 bg-purple-900 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg mb-2">Name</label>
          <input type="text" className="w-full p-3 rounded bg-purple-700 text-white outline-none" placeholder="Your Name" />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg mb-2">Email</label>
          <input type="email" className="w-full p-3 rounded bg-purple-700 text-white outline-none" placeholder="Your Email" />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2">Message</label>
          <textarea className="w-full p-3 rounded bg-purple-700 text-white outline-none" placeholder="Your Message" rows={4}></textarea>
        </div>

        <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 p-3 rounded-lg text-lg font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
