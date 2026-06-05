import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/herob.png'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-10">
          <div className="max-w-lg">
            <h1 className="font-bold text-6xl">
              Take better care of
              <span className="text-[#1C9426]"> your plants</span>
            </h1>
            <p className="py-4">
              PlantCare helps you remember watering, track growth and keep your plants healthy and happy.
            </p>
            <NavLink className="bg-[#1C9426] text-white p-2 px-5 rounded-sm">Get Started Free</NavLink>
            <NavLink className="border p-2 px-5 rounded-sm mx-2">Watch demo</NavLink>
          </div>
          <div><img src={heroImg} alt="heroImg" /></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 flex justify-start gap-12">
          <div className="max-w-xs">
            <h3 className="font-semibold">Watering Reminders</h3>
            <p className="text-gray-600 mt-2">
              Never forget to water your plants again.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="font-semibold">Growth Tracking</h3>
            <p className="text-gray-600 mt-2">
              Track how your plants grow over time.
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="font-semibold">Plant Health Tips</h3>
            <p className="text-gray-600 mt-2">
              Keep your plants healthy and strong.
            </p>
          </div>

        </div>
      </main>
    </>
  )
}

export default Home