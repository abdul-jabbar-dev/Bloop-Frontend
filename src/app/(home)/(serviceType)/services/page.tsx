'use client'
import { SettingOutlined, ThunderboltOutlined, TrophyOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import callC from '../../../../assets/help.jpg'
import Image from "next/image";
const features = [
  {
    name: 'We guarantee that you will be satisfied',
    description:
      `And if you are ever not completely satisfied, there is our Satisfied Customer Guarantee. Get in touch with us right away, and we'll fix what was missed as quickly as we can!`,
    icon: <TrophyOutlined className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />,
  },
  {
    name: 'Sustainability permeates everything we do',
    description: `We always make climate-adapted choices, and use methods, cleaning agents and transport with the least possible environmental impact. As one of the industry's largest players, we make sure to take our responsibility. `,
    icon: <ThunderboltOutlined className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />,
  },
  {
    name: 'Always the same service assistant',
    description: 'As a general rule, we schedule the same employee who takes care of the cleaning at your place, so that he or she becomes an expert on your particular home and how you want it. ',
    icon: <SettingOutlined className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />,
  },
]
export default function page() {
  return (
    <>
      <div className="overflow-hidden bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Row className=" flex mx-auto  max-w-2xl  lg:mx-0 lg:max-w-none   ">
            <Col xxl={12} >
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base font-semibold leading-7 text-indigo-600">Fast Service</h2>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Four good reasons to choose Bloop</p>
 
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900"> 
                          {feature.icon}
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div></Col>
            <Col xxl={12} className="overflow-hidden">
              <Image
                src={callC.src}
                alt="Product screenshot"
                className="w-[48rem] bg-contain max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              /></Col>
          </Row>
        </div>
      </div>
    </>
  )
}
