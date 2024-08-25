
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import teamMember1 from '../assets/images/bike.png';  // Replace with actual image paths
import teamMember2 from '../assets/images/bike.png';  // Replace with actual image paths

const About = () => {
  return (
    <div className="p-6 lg:p-12 bg-gray-100 min-h-screen">
      {/* Mission Statement */}
      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At BikeRent, our mission is to provide the best rental experience for biking enthusiasts of all levels. We strive to make every ride memorable and every journey enjoyable by offering high-quality bikes and exceptional customer service.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Team Member 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={teamMember1} alt="Team Member 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                <p className="mt-2 text-gray-600">
                  John is passionate about biking and has been leading BikeRent with his vision for creating an accessible and enjoyable biking experience for everyone.
                </p>
              </div>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={teamMember2} alt="Team Member 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Marketing Manager</p>
                <p className="mt-2 text-gray-600">
                  Jane brings a wealth of experience in marketing and is dedicated to spreading the word about BikeRent and our incredible biking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our History</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">From Humble Beginnings</h3>
          <p className="text-gray-600 mb-4">
            BikeRent started as a small local business with a single bike. Over the years, we have grown to become a leading bike rental service provider with a diverse range of bikes and a loyal customer base.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>2010: Founded by John Doe</li>
            <li>2015: Expanded to multiple locations</li>
            <li>2018: Introduced electric bikes</li>
            <li>2020: Launched our mobile app</li>
            <li>2022: Reached 10,000+ satisfied customers</li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <div className="flex flex-col sm:flex-row justify-center items-start gap-6">
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Office Address</h3>
            <p className="text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              123 Bike Lane, Cycle City, BC 12345
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Phone</h3>
            <p className="text-gray-600 flex items-center">
              <FaPhoneAlt className="mr-2 text-green-500" />
              (123) 456-7890
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Email</h3>
            <p className="text-gray-600 flex items-center">
              <FaEnvelope className="mr-2 text-green-500" />
              contact@bikerent.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
