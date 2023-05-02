import React from 'react'
import ChefCard from '../components/ChefCard'
import { useLoaderData } from 'react-router-dom'
const Home = () => {

    const data = useLoaderData()
    return (
        <div className='container '>
            {/* banner section  */}
            <section className='banner flex items-center justify-center'>
                <p className='text-[22px] md:text-[30px] font-[800] text-[#3e2652] text-center'>
                    Our team of passionate cooks and chefs has curated a <br /> collection of delicious and authentic American recipes <br /> that you can try in the comfort of your own home</p>
            </section>

            {/* chef section  */}
            <section className='mt-20'>
                <h1 className='text-[30px] font-[800] text-center mb-5' >Chef</h1>
                <div className='grid grid-cols-4 gap-3  '>
                    {
                        data && data.map(i => <ChefCard key={i.id} item={i} />)
                    }
                </div>

            </section>
        </div>
    )
}

export default Home