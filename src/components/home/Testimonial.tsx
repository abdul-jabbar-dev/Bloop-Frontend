import React from 'react'
import { Carousel, Row } from 'antd';
import Image from 'next/image';
import p1 from '../../assets/testimonial/p1.jpg'
import p2 from '../../assets/testimonial/p2.png'
import p3 from '../../assets/testimonial/p3.jpg'
export default function Testimonial() {
  return (
    <div>

      <div>
        <p>SOME HAPPY FACES</p>
        <h3>Real Happy Customers, Real Stories</h3>
      </div>
      <Carousel effect="fade" style={{ width: "100%" }} className='mx-auto'>
        <Row align={'middle'} justify={'center'} >
          <div className='w-2/4'>
            <p> Initially I was reluctant. I wasn’t sure how an online platform would be. Sheba.xyz was able to complete the job just as I imagined it to be. Thanks to them, they made it possible.</p>
            <h4>- Arif Ur Rahman</h4>
            <p>Flyout BD</p>
          </div>
          <div className='w-2/4'>
            <Image src={p1} width={200} height={200} style={{width:'100%'}} alt='profile' />
          </div>
        </Row>
      </Carousel>
    </div>
  )
}
