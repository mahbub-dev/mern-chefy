
import ChefCard from '../components/ChefCard'
import { useLoaderData } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
const Home = () => {

    const data = useLoaderData()
    return (
        <div className='container'>
            {/* banner section  */}
            <section className='banner flex items-center justify-center'>
                <p className='text-[22px] md:text-[30px] font-[800] text-[#3e2652] text-center'>
                    Our team of passionate cooks and chefs has curated a <br /> collection of delicious and authentic American recipes <br /> that you can try in the comfort of your own home</p>
            </section>

            <section className="bg-[--bg-color] py-12  rounded">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[--text-color]">Chef</h2>
                    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            data.length ? data.map(i => <ChefCard key={i.id} item={i} />) : <LoadingSpinner />
                        }
                    </div>
                </div>
            </section>


            {/* testimonials section  */}
            <section className="bg-[--bg-color] py-12  rounded">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[--text-color]">What Our Customers Say</h2>
                    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="text-[--text-color]">
                            <p className="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris eu augue rhoncus bibendum.</p>
                            <p className="testimonial-author font-[800] mt-5">John Smith</p>
                        </div>

                        <div className="text-[--text-color]">
                            <p className="testimonial-text">Praesent sit amet elit quis tellus varius ullamcorper. In dictum enim vitae tortor viverra, a placerat nisi faucibus.</p>
                            <p className="testimonial-author font-[800] mt-5">Jane Doe</p>
                        </div>

                        <div className="text-[--text-color]">
                            <p className="testimonial-text">Nulla tristique sapien vel suscipit ultrices. Duis malesuada, est vel dapibus pulvinar, elit elit luctus ipsum, eu feugiat velit velit at tellus.</p>
                            <p className="testimonial-author font-[800] mt-5">Bob Johnson</p>
                        </div>

                        <div className="text-[--text-color]">
                            <p className="testimonial-text">Morbi mollis lacus mauris, sit amet dignissim lorem convallis vel. Vestibulum vehicula est risus, eu accumsan magna ornare in.</p>
                            <p className="testimonial-author font-[800] mt-5">Alice Davis</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* contact section  */}

            <section className="bg-[--bg-color] py-12 mb-10 rounded">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-[--text-color]">Contact Us</h2>
                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="text-[--text-color]">
                            <h3 className="contact-title">Address</h3>
                            <p className="contact-info">123 Main St, Suite 200<br />New York, NY 10001</p>
                        </div>

                        <div className="text-[--text-color]">
                            <h3 className="contact-title">Phone</h3>
                            <p className="contact-info">(555) 555-5555</p>
                        </div>

                        <div className="text-[--text-color]">
                            <h3 className="contact-title">Email</h3>
                            <p className="contact-info">info@chefy.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home