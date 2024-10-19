import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Every great cake starts with a simple idea: bring joy to people
            through unforgettable flavors. We Bake was born from a love for
            baking and a desire to turn life’s sweetest moments into lasting
            memories. What started as a passion project in a cozy kitchen has
            blossomed into a beloved cake shop that creates magic for every
            occasion.
          </p>
          <p>
            At We Bake, baking isn’t just a craft – it’s an art. We’re dedicated
            to delivering cakes that taste as good as they look, with every
            layer, frosting, and topping meticulously crafted. From the first
            step of mixing the freshest ingredients to the final touch of
            decoration, we pour our heart and soul into every cake we create.
          </p>
          <b className="text-gray-800">OUR GOAL</b>
          <p>
            For us, cakes aren’t just desserts – they’re part of the moments we
            cherish most. From birthdays to weddings, or simply a day to treat
            yourself, our cakes are designed to bring people together, create
            smiles, and make every celebration sweeter. At We Bake, we invite
            you to celebrate life’s beautiful moments with a cake made just for
            you. Every slice is crafted with love, because we believe that the
            best way to enjoy a moment is with something sweet in hand.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            quality is our top priority. From the ingredients we use to the
            final presentation, we ensure that every step of our process meets
            the highest standards.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenince:</b>
          <p className="text-gray-600">
            we know that planning a celebration can be stressful, so we’ve made
            it our mission to ensure that ordering your perfect cake is as easy
            and convenient as possible.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600" >
            we believe that great customer service is just as important as great
            cake. Our commitment to providing an exceptional experience is at
            the heart of everything we do.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default About;
