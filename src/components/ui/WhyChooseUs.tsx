import img from '../../assets/images/bike2.png'

const WhyChooseUs = () => {
    return (
        <section className="bg-[#E0F7FA] py-12 px-6">
            <h1 className='md:text-4xl text-2xl text-center font-bold'>Why Choose Us</h1>
            <p className='font-semibold text-center mb-8 my-2'>Snowboard equipment rental service adapted to your needs in one place</p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Column */}
                <div>
                    <div className="text-center md:text-right mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-[#121416] mb-4">
                            Quality Bikes
                        </h3>
                        <p className="text-lg text-gray-700">
                            We provide top-quality bikes that are regularly maintained and serviced, ensuring a smooth and safe ride every time.
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <h3 className="text-xl md:text-2xl font-bold text-[#121416] mb-4">
                            Quality Bikes
                        </h3>
                        <p className="text-lg text-gray-700">
                            We provide top-quality bikes that are regularly maintained and serviced, ensuring a smooth and safe ride every time.
                        </p>
                    </div>
                </div>

                {/* Middle Column */}
                <div className="flex justify-center">
                    <img
                        src={img}
                        alt="Why Choose Us"
                        className="w-full max-w-xs rounded-md shadow-lg"
                    />
                </div>

                {/* Right Column */}
                <div>
                    <div className="text-center mb-4 md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-[#121416] mb-4">
                            Affordable Pricing
                        </h3>
                        <p className="text-lg text-gray-700">
                            Enjoy competitive pricing with no hidden fees. We offer flexible rental options that fit your budget and needs.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-[#121416] mb-4">
                            Affordable Pricing
                        </h3>
                        <p className="text-lg text-gray-700">
                            Enjoy competitive pricing with no hidden fees. We offer flexible rental options that fit your budget and needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
