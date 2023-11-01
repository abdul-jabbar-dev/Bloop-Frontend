import React from "react";
import img from "../../../assets/acservice.png";
import { Button } from "antd";
import Link from "next/link";
export default function HeroSection() {
  return (
    <>
      <div
        className="md:bg-right-top bg-no-repeat bg-clip-content"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundPositionY: "175px",
        }}
      >
        <div className="relative isolate px-6 pt-10 lg:px-8 containers mx-auto ">

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl text-black font-bold tracking-tight lg:text-gray-900 sm:text-6xl">
                We Provide world-class daily life Services
              </h1>
              <p className="mt-6 text-black    text-lg leading-8 md:text-gray-600">
                Welcome to Bloop Home Services, where your home's well-being is our top priority. From electrical repairs to painting, cleaning, and more, Bloop is your trusted partner for all your home improvement needs. Explore our services today and let us turn your house into the dream home you've always envisioned.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href={'/services'}><button
                  className="rounded-md  btn-primary py-2 px-3"
                >
                  Get started
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
