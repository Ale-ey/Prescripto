import React from "react";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side  */}
        <div>
          <img src={assets.logo} alt="#" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 leading-6 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* mid  section  */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* right side  */}
        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <li>aleeyhaider986@gmail.com</li>
            <li>+92-307-8723645</li>
          </ul>
        </div>
      </div>
      <div>
        {/* bottom copyright  */}

        <hr />
        <p className="py-5  text-sm text-center">
          Copyright © 2025 Ali Haider - All Right Reserved.
        </p>
      </div>
    </div>
  );
};
