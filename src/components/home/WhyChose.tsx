import { Row } from "antd";
import Image from "next/image";
import React from "react";
import acre from "../../assets/AC-repair.jpeg";
export default function WhyChose() {
  return (
    <>
      <div className="py-36 containers mx-auto">
        <div className="my-6">
          <p className="font-light text-xl text-gray-600">WHY CHOOSE US</p>
          <h2 className="font-semibold text-3xl text-gray-700">
            Because we care about your safety..
          </h2>
        </div>
        <Row align={"middle"} justify={"center"}>
          <div className="w-1/2 grid grid-cols-1 gap-16  md:grid-cols-2">
            <Row className="space-x-2" align={"middle"}>
              <Image
                src="https://img.icons8.com/cotton/64/protection-mask--v5.png"
                alt="protection-mask--v5"
                height={52}
                className="rounded-xl"
                width={52}
              />
              <span className="text-2xl font-semibold text-gray-600">
                Ensuring <br />
                Masks
              </span>
            </Row>

            <Row className="space-x-2" align={"middle"}>
              <Image
                src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-support-business-and-finance-icongeek26-linear-colour-icongeek26.png"
                alt="protection-mask--v5"
                height={52}
                className="rounded-xl"
                width={52}
              />
              <span className="text-2xl font-semibold text-gray-600">
                24/7 <br />
                Support
              </span>
            </Row>
            <Row className="space-x-2" align={"middle"}>
              <Image
                src="https://img.icons8.com/external-flat-andi-nur-abdillah/64/external-Gloves-golf-(flat)-flat-andi-nur-abdillah.png"
                alt="protection-mask--v5"
                height={52}
                className="rounded-xl"
                width={52}
              />
              <span className="text-2xl font-semibold text-gray-600">
                Ensuring <br />
                Gloves
              </span>
            </Row>

            <Row className="space-x-2" align={"middle"}>
              <Image
                src="https://img.icons8.com/cotton/64/sanitizer--v2.png"
                alt="protection-mask--v5"
                height={52}
                className="rounded-xl"
                width={52}
              />
              <span className="text-2xl font-semibold text-gray-600">
                Equipment
              </span>
            </Row>
            <div></div>
          </div>
          <div className="w-1/2">
            <Image
              alt="ac rapiers"
              className="rounded-xl"
              src={acre}
              width={600}
              style={{ width: "100%" }}
            />
          </div>
        </Row>
      </div>
    </>
  );
}
