import React from 'react'
import LGBTHeart from '../lib/images/LGBT-heart.png'
import { useNavigate } from 'react-router'
const Welcome = () => {
    const navigate = useNavigate()
    const handleclick = (id) => {
        navigate(`/musicians/` + id)
    }
    return (
        <>
            <header className="bg-indigo-700 text-white text-center py-8">
                <h1 className="text-4xl font-bold">Welcome to Pridezzles</h1>
            </header>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-[75vh]">
                    <div className='ml-4'>
                        <h2 className="text-7xl font-bold mb-4 change-font-family">About Us</h2>
                        <p className="mb-6 text-3xl change-font-family">We are dedicated to creating a safe and inclusive space for the LGBTQ+ community. Our mission is to promote equality, acceptance, and support for all individuals.</p>
                        <p >Our team is committed to providing resources, educational materials, and a platform for sharing personal stories and experiences within the LGBTQ+ community.</p>
                        <a href="/musicians/1" className="inline-block mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition duration-300 text-xl">Try out puzzles</a>
                    </div>
                    <div className="rounded-lg p-8">
                        <img src={LGBTHeart} alt="LGBTQ+ Community" className="animated-image" />
                    </div>
                </div>
            </div>

            <section className="py-10">
                <div className="container mx-auto">
                    <div className='text-center'>
                        <button className="text-3xl font-bold mb-6 text-center text-black-500 py-2 px-4 rounded-lg cursor-default newFont">Inspirations</button>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
                            <img src="https://th.bing.com/th/id/R.3db6b29844232e0a26cdae7954ab4054?rik=ZXQ9kv%2f5tnZy9Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpuzzle-png-hd-jigsaw-puzzle-hd-png-clipart-image-01-199x210-jigsaw-puzzle-png-transparent-free-images-1456.png&ehk=ZLo%2fy2ht7ptOD%2f88Ybna0rqIjB35qRZO0D4mgZ%2fFvSM%3d&risl=&pid=ImgRaw&r=0" alt="Community Story 1" height={500} width={300} className='mx-auto img-1' />
                            <div className="p-3 text-center mt-14">
                                <button className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md" 
                                onClick={ ()=> navigate(`/musicians/1`)}>Try out puzzles</button>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
                            <img src="https://th.bing.com/th/id/OIP.-DZs7WGXsOIoKuQm8uu7PgHaEs?pid=ImgDet&rs=1" alt="Community Story 2" className='mx-auto img-2' height={100} width={600} />
                            <div className="p-3 text-center">
                                <button disabled className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md">Famous LGBT historical figures</button>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
                            <img src="https://thumbs.dreamstime.com/b/rainbow-music-background-means-colorful-lines-melody-meaning-42077248.jpg" alt="Community Story 3" className='mx-auto img-3' height={100} width={600} />
                            <div className="p-3 text-center">
                                <button className=" bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md">Influential LGBT musicians</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-indigo-900 text-white py-3 text-center">
                <p>&copy; 2023 Pridezzles. All rights reserved.</p>
            </footer>
        </>
    )
}

export default Welcome
