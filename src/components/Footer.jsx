import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                <div>
                    <h3 className="font-bold text-2xl">
                        PlantCare
                    </h3>
                    <p className="text-gray-400 mt-4">
                        Helping your plants thrive every day.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">
                        Company
                    </h4>

                    <ul className="space-y-2 text-gray-400">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">
                        Resources
                    </h4>

                    <ul className="space-y-2 text-gray-400">
                        <li>Plant Guide</li>
                        <li>FAQs</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">
                        Follow Us
                    </h4>

                    <ul className="space-y-2 text-gray-400">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer