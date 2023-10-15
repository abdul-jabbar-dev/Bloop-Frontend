import Image from "next/image";
import customerService from "../../assets/customerService.png";
import { Button } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
export default function LetUs() {
  return (
    <div className="bg-blue-50 py-12">
      <div className=" containers mx-auto">
        <div className="flex items-center">
          <div className="w-8/12">
            <p className="font-semibold text-3xl">
              Can’t find your desired service? Let us know 24/7 in 16516.
            </p>
            <div className="my-6">
              <Button type="primary" size="large">
                Request a service
              </Button>
              <Button
                className="mx-6 flex space-x-2 align-middle items-center"
                type="default"
                size="large"
              >
                <span>
                  <PhoneOutlined />
                </span>
                <span> 14775</span>
              </Button>
            </div>
          </div>
          <div className="w-4/12">
            <Image
              width={600}
              height={400}
              style={{ width: "100%", height: "100%" }}
              alt="customer service"
              src={customerService}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
