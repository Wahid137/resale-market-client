import React from 'react';
import logo from '../../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-[#1C232B] text-white w-full max-w-full">
            <div>
                <p>LARANA Bike Store.<br />Providing best products since 1992</p>
                <img src={logo} className='bg-secondary w-20 h-20' alt="" />
            </div>
            <div>
                <span className=" text-white">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;