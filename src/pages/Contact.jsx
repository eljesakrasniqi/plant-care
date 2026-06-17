import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-2">
            We’re here to help you with your plant care journey 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              Send Message
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"/>
              <input type="email" placeholder="Your Email"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"/>

              <input type="text"  placeholder="Subject"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"/>
              <textarea rows="5"  placeholder="Your Message..."
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none" />

              <button type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Contact Info
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p> support@plantcare.com</p>
                <p> +383 44 123 456</p>
                <p> Prishtina, Kosovo</p>
              </div>
            </div>
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Working Hours
              </h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Mon - Fri: 09:00 - 18:00</p>
                <p>Sat: 10:00 - 14:00</p>
                <p>Sun: Closed</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-semibold text-green-700 mb-2">
                Need help faster?
              </h3>
              <p className="text-sm text-green-600">
                Check Care Guide or Reminders for instant plant tips.
              </p>

              <button className="mt-3 text-green-700 text-sm font-medium hover:underline">
                Go to Care Guide →
              </button>
            </div>

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Contact;