import React from 'react';
import { Carousel } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import helmetImage from '../../assets/images/helmet.png';
import bikeImage from '../../assets/images/bikes.png';
import glovesImage from '../../assets/images/gloves.png';
import waterBottleImage from '../../assets/images/bottles.png';

const contentStyle: React.CSSProperties = {
    height: '500px', 
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
    maxWidth: '500px', 
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
    <Carousel autoplay>
        <div style={contentStyle}>
            <div className='flex justify-center items-center gap-4'>
                <div className='flex justify-center items-center'>
                    <img className='' src={helmetImage} alt="Kask Vintage Helmet" style={imageStyle} />
                </div>
                <div className='' style={textContainerStyle}>
                    <h3 className="text-7xl font-bold mb-8">Kask Vintage Helmet</h3>
                    <ul className='flex gap-4 my-4' style={featureListStyle}>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Lightweight Design</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Ventilation System</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />High Impact Protection</li>
                        </div>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Retro Aesthetic</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Adjustable Fit</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Durable Shell</li>
                        </div>
                    </ul>
                    <div className='flex items-center gap-8'>
                        <p className="text-xl font-bold mt-4 ml-4">$250</p>
                        <button className="mt-4 px-6 py-2 rounded text-white bg-green-500 font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={contentStyle}>
            <div className='grid grid-cols-2 justify-center items-center gap-4'>
                <div className='flex justify-center items-center'>
                    <img className='' src={bikeImage} alt="Mountain Bike" style={imageStyle} />
                </div>
                <div className='' style={textContainerStyle}>
                    <h3 className="text-7xl font-bold mb-8">Mountain Bike</h3>
                    <ul className='flex gap-4 my-4' style={featureListStyle}>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Aluminum Frame</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Hydraulic Brakes</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />21 Speed Gears</li>
                        </div>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Off-road Tires</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Shock Absorbers</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Comfortable Seat</li>
                        </div>
                    </ul>
                    <div className='flex items-center gap-8'>
                        <p className="text-xl font-bold mt-4 ml-4">$1200</p>
                        <button className="mt-4 px-6 py-2 rounded text-white bg-green-500 font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={contentStyle}>
            <div className='grid grid-cols-2 justify-center items-center gap-4'>
                <div className='flex justify-center items-center'>
                    <img className='' src={glovesImage} alt="Cycling Gloves" style={imageStyle} />
                </div>
                <div className='' style={textContainerStyle}>
                    <h3 className="text-7xl font-bold mb-8">Cycling Gloves</h3>
                    <ul className='flex gap-4 my-4' style={featureListStyle}>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Breathable Material</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Padded Palm</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Adjustable Wrist Strap</li>
                        </div>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Touchscreen Compatible</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Reflective Accents</li>
                        </div>
                    </ul>
                    <div className='flex items-center gap-8'>
                        <p className="text-xl font-bold mt-4 ml-4">$50</p>
                        <button className="mt-4 px-6 py-2 rounded text-white bg-green-500 font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={contentStyle}>
            <div className='grid grid-cols-2 justify-center items-center gap-4'>
                <div className='flex justify-center items-center'>
                    <img className='' src={waterBottleImage} alt="Water Bottle" style={imageStyle} />
                </div>
                <div className='' style={textContainerStyle}>
                    <h3 className="text-7xl font-bold mb-8">Water Bottle</h3>
                    <ul className='flex gap-4 my-4' style={featureListStyle}>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Leak-proof Design</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />BPA-Free Material</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Insulated</li>
                        </div>
                        <div>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Easy to Clean</li>
                            <li style={featureItemStyle}><CheckOutlined className="text-green-500 font-bold text-2xl mr-2" />Wide Mouth</li>
                        </div>
                    </ul>
                    <div className='flex items-center gap-8'>
                        <p className="text-xl font-bold mt-4 ml-4">$30</p>
                        <button className="mt-4 px-6 py-2 rounded text-white bg-green-500 font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Carousel>
);

export default Slider;
