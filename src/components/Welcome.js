import React from 'react'
import LGBTHeart from '../lib/images/LGBT-heart.png'
const Welcome = () => {
    return (
        <>
            <header className="bg-indigo-700 text-white text-center py-10">
                <h1 className="text-4xl font-bold">Welcome to Pridezzles</h1>
            </header>

            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-[85vh]">
                    <div className='ml-4'>
                        <h2 className="text-7xl font-bold mb-4 change-font-family">About Us</h2>
                        <p className="mb-6 text-3xl change-font-family">We are dedicated to creating a safe and inclusive space for the LGBTQ+ community. Our mission is to promote equality, acceptance, and support for all individuals.</p>
                        <p >Our team is committed to providing resources, educational materials, and a platform for sharing personal stories and experiences within the LGBTQ+ community.</p>
                        <a href="lgbt-puzzle.html" className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition duration-300 text-xl">Try out puzzles</a>
                    </div>
                    <div className="rounded-lg p-8">
                        <img src={LGBTHeart} alt="LGBTQ+ Community Image" className="animated-image" />
                    </div>
                </div>
            </div>

            <section className="py-10">
                {/* <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-center change-font-family">Community Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="story1.jpg" className="w-full" alt="Community Story 1" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2">Story Title 1</h5>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nunc ut orci finibus hendrerit.</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img src="story2.jpg" className="w-full" alt="Community Story 2" />
                            <div className="p-6">
                                <h5 className="text-xl font-bold mb-2">Story Title 2</h5>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur nunc ut orci finibus hendrerit.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <footer className="bg-indigo-900 text-white py-6 text-center">
                <p>&copy; 2023 Pridezzles. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Welcome
