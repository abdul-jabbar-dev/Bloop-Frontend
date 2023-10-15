import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import hireWorker from "../../assets/hire-worker.png";
import { useRouter } from "next/router";
import Link from "next/link";
export default function BecomeASpecialist() {
  return (
    <div className="bg-gray-500 w-full">
      <div
        className="w-full  md:w-[90%] py-32 bg-no-repeat bg-right-bottom bg-contain "
        style={{ backgroundImage: `url(${hireWorker.src})` }}
      >
        <div className="relative before:block before:absolute md:before:w-1/6 before:w-1/4 before:-top-8 md:before:top-0 before:left-0 before:h-[2px] before:bg-orange-500  ">
          <Row className="md:w-[60%] w-full mx-auto flex sm:justify-between justify-center">
            <div className="text-6xl absolute -top-8 text-orange-500">
              Become A specialist
            </div>
            <Col span={23} sm={21} lg={18} className="pt-32 sm:pt-16">
              <h3 className=" text-lg text-slate-200">
                Are you ready to embark on an exciting career journey? At BLOOP,
                we're always on the lookout for dedicated individuals to join
                our team of professionals. As a leader in essential services
                like AC repair, appliance maintenance, and more, we offer a
                dynamic and supportive work environment where your skills and
                passion can thrive.
              </h3>
              <Link href={"/career"}>
                <button className=" bg-transparent text-lg text-orange-500 outline-1 outline px-3 py-[.5rem] mt-4 hover:bg-orange-600 hover:text-white rounded-md outline-orange-500">
                  Getting started
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
