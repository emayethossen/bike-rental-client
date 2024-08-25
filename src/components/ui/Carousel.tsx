import React from 'react';
import { Carousel } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import helmetImage from '../../assets/images/helmet.png';
import bikeImage from '../../assets/images/bikes.png';
import glovesImage from '../../assets/images/gloves.png';

const contentStyle: React.CSSProperties = {
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f5f5',
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    textAlign: 'center',
};

const textContainerStyle: React.CSSProperties = {
    textAlign: 'left',
    paddingLeft: '20px',
    maxWidth: '100%',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '100px', // Adjusted for responsiveness
    height:'100px',
    borderRadius: '10px',
    marginBottom: '20px',
};

const featureListStyle: React.CSSProperties = {
    listStyleType: 'none',
    paddingLeft: 0,
};

const featureItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const Slider = () => (
    <div className="px-4 py-8">
        <Carousel autoplay>

            {/* First Slide */}
            <div style={contentStyle}>
                <div className="md:grid grid-cols-2 justify-center items-center md:gap-8">
                    <div className="flex justify-center items-center">
                        <img src={bikeImage} alt="Mountain Bike" style={imageStyle} />
                    </div>
                    <div className="" style={textContainerStyle}>
                        <h3 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-8">Mountain Bike</h3>
                        <ul className="grid grid-cols-2 items-center justify-center md:justify-start gap-4 my-4" style={featureListStyle}>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Aluminum Frame</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Hydraulic Brakes</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />21 Speed Gears</li>
                            </div>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Off-road Tires</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Shock Absorbers</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Comfortable Seat</li>
                            </div>
                        </ul>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <p className="text-lg md:text-xl font-bold">$1200</p>
                            <button className="px-4 py-2 md:px-6 md:py-2 rounded text-white bg-green-500 font-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Slide */}
            <div style={contentStyle}>
                <div className="md:grid grid-cols-2 justify-center items-center gap-8">
                    <div className="flex justify-center items-center">
                        <img src={glovesImage} alt="Cycling Gloves" style={imageStyle} />
                    </div>
                    <div className="" style={textContainerStyle}>
                        <h3 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-8">Cycling Gloves</h3>
                        <ul className="grid grid-cols-2 items-center justify-center md:justify-start gap-4 my-4" style={featureListStyle}>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Breathable Metals</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Padded Palm</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Adjustable</li>
                            </div>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Touch Compatible</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Reflective Accents</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Softness</li>
                            </div>
                        </ul>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <p className="text-lg md:text-xl font-bold">$50</p>
                            <button className="px-4 py-2 md:px-6 md:py-2 rounded text-white bg-green-500 font-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Slide */}
            <div style={contentStyle}>
                <div className="md:grid grid-cols-2 justify-center items-center gap-8">
                    <div className="flex justify-center items-center">
                        <img src={helmetImage} alt="Water Bottle" style={imageStyle} />
                    </div>
                    <div className="" style={textContainerStyle}>
                        <h3 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-8">Kask Vintage Helmet</h3>
                        <ul className="grid grid-cols-2 items-center justify-center md:justify-start gap-4 my-4" style={featureListStyle}>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Lightweight Design</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Ventilation System</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />High Protection</li>
                            </div>
                            <div>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Retro Aesthetic</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Adjustable Fit</li>
                                <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-xl mr-2" />Durable Shell</li>
                            </div>
                        </ul>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <p className="text-lg md:text-xl font-bold">$25</p>
                            <button className="px-4 py-2 md:px-6 md:py-2 rounded text-white bg-green-500 font-semibold">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
);

export default Slider;
