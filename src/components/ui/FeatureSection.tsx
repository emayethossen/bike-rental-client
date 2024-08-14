import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import image from '../../assets/images/bike.png'

const FeatureSection = () => {
    return (
        <div className="container mx-auto p-4">
            <div className='grid md:grid-cols-2 md:gap-12 gap-4 md:items-center'>
                <div className="text-center md:space-y-12">
                    <h1 className="text-2xl md:text-3xl font-bold md:w-3/5 md:mx-auto mb-4">
                        Renrol: The company to offer the best scooter and bike rental services
                    </h1>
                    <img src={image} alt="Scooter and Bike" className="w-full rounded  md:mb-6" />
                </div>
                <div className="md:space-y-12">
                    <div className="hidden gap-4 md:grid md:grid-cols-8">
                        <img src={image} alt="Scooter and Bike" className="w-full col-span-5 rounded" />
                        <img src={image} alt="Scooter and Bike" className="w-full h-full col-span-3 rounded" />
                    </div>
                    <div className="md:w-full">
                        <h2 className="text-xl md:text-3xl md:text-left text-center md:text-2xl font-bold mb-4">Renting Service Features</h2>
                        <p className="mb-6 lg:text-left text-center md:w-3/4">Consectetur adipisicing elit sed eiusmod tempor dolore magna aliqua ad minim veniam quis nostrud exercitation aliquip.</p>
                        <ul className="list-none w-3/5 md:w-full mx-auto space-y-2 font-semibold">
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                                Free booking cancellation up to 15 hours
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                                We offer 24/7 road rental assistance
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                                More than 350,000 satisfied customers
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={faCheckSquare} className="text-green-500 mr-2" />
                                Fleet of over 8,000 brand new scooters & bikes
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FeatureSection
