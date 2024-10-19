import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="flex items-center"> {/* Use flex to align items horizontally */}
          <img src={assets.logo} className="mr-4 w-32" alt="Logo" /> {/* Add margin to right */}
          <div>
            <p className='font-serif text-lg font-bold'>WE BAKE</p>
            <p className="w-full md:w-2/3 text-gray-600">
              At We Bake, we bring the joy of home-baked goodness straight to your
              table! Our passion for baking shines through in every cake we
              create, using only the freshest ingredients and traditional recipes.
              Whether it's a birthday, anniversary, or just a sweet treat for
              yourself, each cake is made with love and attention to detail.
            </p>
          </div>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1  text-gray-600'>
                <li>+91 9019319907</li>
                <li>webakeyourcake@gmail.com </li>
                <div className="flex items-center">
                <img className="flex w-8 h-8" src={assets.instagram_icon} alt=""  />
                <p className="h-5">Weee_bake</p>
                </div>
              
            </ul>
        </div>

      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center '> Copyright 2024@ WEBAKE.com - ALL Rights Reserved</p>
        </div>
    </div>
  );
};

export default Footer;
