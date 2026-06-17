import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/herob.png'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main >
        <section className="min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

            <div className="max-w-xl">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Smart Plant Care
              </span>

              <h1 className="font-bold text-5xl lg:text-7xl mt-6 leading-tight">
                Take better care of
                <span className="text-[#1C9426]"> your plants</span>
              </h1>

              <p className="py-6 text-lg text-gray-600">
                PlantCare helps you remember watering, track growth,
                monitor plant health and keep your indoor garden thriving.
              </p>

              <div className="flex gap-4">
                <NavLink className="bg-[#1C9426] text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
                  Get Started Free
                </NavLink>

                <NavLink className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                  Watch Demo
                </NavLink>
              </div>
            </div>

            <div>
              <img src={heroImg} alt="PlantCare" className="max-w-lg w-full"
              />
            </div>

          </div>
        </section>
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-16">
              Everything your plants need
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
                <h3 className="font-semibold text-xl mb-3">
                  Watering Reminders
                </h3>
                <p className="text-gray-600">
                  Never forget to water your plants again.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
                <h3 className="font-semibold text-xl mb-3">
                  Growth Tracking
                </h3>
                <p className="text-gray-600">
                  Track plant growth with detailed history.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-2">
                <h3 className="font-semibold text-xl mb-3">
                  Plant Health Tips
                </h3>
                <p className="text-gray-600">
                  Receive personalized care recommendations.
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="bg-[#F7FBF7] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
              <div>
                <h2 className="text-5xl font-bold text-[#1C9426]">
                  10K+
                </h2>
                <p className="mt-2 text-gray-600">
                  Active Users
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#1C9426]">
                  50K+
                </h2>
                <p className="mt-2 text-gray-600">
                  Plants Tracked
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-[#1C9426]">
                  98%
                </h2>
                <p className="mt-2 text-gray-600">
                  Satisfaction Rate
                </p>
              </div>

            </div>

          </div>
        </section>
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-[#1C9426] font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-xl">
                  Add Plant
                </h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-[#1C9426] font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-xl">
                  Set Schedule
                </h3>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-[#1C9426] font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-xl">
                  Track Growth
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#1C9426] py-24 text-white">
          <div className="max-w-4xl mx-auto text-center px-6">

            <h2 className="text-4xl font-bold mb-10">
              What Plant Lovers Say
            </h2>

            <p className="text-xl italic leading-relaxed">
              "PlantCare completely changed how I care for my indoor plants.
              The reminders and tips are incredibly helpful."
            </p>

            <p className="mt-6 font-semibold">
              Sarah Johnson
            </p>

          </div>
        </section>
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">

            <h2 className="text-5xl font-bold">
              Ready to grow healthier plants?
            </h2>

            <p className="mt-4 text-gray-600 text-lg">
              Join thousands of plant owners today.
            </p>

            <button className="mt-8 bg-[#1C9426] text-white px-8 py-4 rounded-lg hover:bg-green-700 transition">
              Start Free Today
            </button>

          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Home