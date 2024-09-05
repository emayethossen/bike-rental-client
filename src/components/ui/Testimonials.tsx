import { Carousel } from 'antd';
import img from '../../assets/images/hello.png';

const testimonials = [
    {
        img: img,
        description: 'This is the best bike rental service I have ever used. Highly recommended!',
        name: 'John Doe',
    },
    {
        img: img,
        description: 'Amazing experience! The bikes are top-notch and the service is excellent.',
        name: 'Jane Smith',
    },
    {
        img: img,
        description: 'Great customer service and high-quality bikes. I will definitely come back.',
        name: 'Michael Brown',
    },
];

const Testimonials = () => (
    <div className="py-8 px-4 md:px-8 bg-[#364d79]">
        <h1 className='md:text-4xl text-2xl text-center font-bold text-white md:mb-8 mb-4 w-3/4 mx-auto'>What Our Customers Have to Say</h1>
        <Carousel arrows infinite={false} autoplay className="text-white">
            {testimonials.map((testimonial, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-[#364d79] md:bg-transparent">
                        <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="rounded-full w-24 h-24 mb-4"
                        />
                        <p className="mb-4 text-lg md:text-xl">{testimonial.description}</p>
                        <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                    </div>
                </div>
            ))}
        </Carousel>
    </div>
);

export default Testimonials;
