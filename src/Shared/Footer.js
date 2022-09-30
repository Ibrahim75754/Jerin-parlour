import React from "react";
import mapIcon from "../Assests/Images/Icon/map-pin-2-fill.png";
import img1 from "../Assests/Images/Icon/Vector-1.png";
import img2 from "../Assests/Images/Icon/Vector-2.png";
import img3 from "../Assests/Images/Icon/Vector-3.png";
import img4 from "../Assests/Images/Icon/Vector.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <footer className="footer pt-10 pb-16  md:pt-14 md:pb-24  container">
        <div className="flex items-start ">
          <img className="w-6 h-6 mt-1" src={mapIcon} alt="" />
          <p>
            #000 (0th Floor), Road #00,
            <br /> New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Projects</a>
          <a className="link link-hover">Our Tems</a>
          <a className="link link-hover">Terms condition</a>
          <a className="link link-hover">Submit listing</a>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">Quick Links</span>
          <a className="link link-hover">Floor</a>
          <a className="link link-hover">Rentals</a>
          <a className="link link-hover">Salse</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Blogs</a>
        </div>
        <div>
          <span className=" text-lg md:mb-3 font-semibold">About Us</span>
          <p className="w-full lg:w-80">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium natus, maiores asperiores obcaecati numquam soluta
            dicta? Harum doloremque
          </p>
          <div className="flex gap-6 mt-2 ">
            <img className="w-6 h-6" src={img1} alt="" />
            <img className="w-6 h-6" src={img2} alt="" />
            <img className="w-6 h-6" src={img3} alt="" />
            <img className="w-6 h-6" src={img4} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
