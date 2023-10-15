import { Col, Row } from "antd";
import React from "react";
import carMechanic from "../../assets/car mechanic.png";
import Image from "next/image";
export default function AvailableEmployee() {
  return (
    <Row className=" w-[60%] sm:w-[90%] lg:w-[60%] mx-auto ">
      <Col lg={14} md={10}>
        <Image
          alt="24h service"
          width={1200}
          height={800}
          src={carMechanic}
          style={{ width: "100%", height: "100%" }}
        />
      </Col>
      <Col
        lg={10}
        md={14}
        style={{ display: "flex" }}
        className="flex items-center justify-center"
      >
        <div className="h-max">
          <p className='font-light text-2xl text-gray-600'>Available for</p>
          <h1 className="mb-6  tracking-wide font-bold text-4xl text-zinc-700">
            24/7 Dedicated Service Team
          </h1>
          <p className="text-lg text-zinc-500">
            At "BLOOP", our 'Round-the-Clock Service Team' ensures your
            essential needs are met 24/7. From fixing frozen AC units to ovens,
            our skilled professionals are here to keep your home comfortable and
            functional any time of day. We're committed to your satisfaction,
            day or night.
          </p>
        </div>
      </Col>
    </Row>
  );
}
