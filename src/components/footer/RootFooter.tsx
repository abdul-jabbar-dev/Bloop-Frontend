import { Row } from 'antd'
import React from 'react'

export default function RootFooter() {
    return (
        <div className='bg-slate-200'>
            <div className='containers py-24 mx-auto flex flex-col sm:flex-row ' >

                <div className='w-3/4 flex justify-center space-x-16' >

                    <div>
                        <h3 className='text-lg mb-2'>CONTACT</h3>
                        <a className='hover:underline' href="#"><p className='text-slate-600'>1456</p></a>
                        <a className='hover:underline' href="#"><p className='text-slate-600'>support@gloop.com</p></a>
                        <h3 className=' font-semibold mt-2 text-slate-800'>Corporate Address</h3>
                        <a className='hover:underline' href="#"><p className='text-slate-600'>Tongi dhaka Bangladesh</p></a>
                    </div>
                    <div>
                        <h3 className='text-lg mb-2'>TOP CATEGORY</h3>
                        <a className='hover:underline' href="/"><p className='text-slate-600'>Mobile Phone</p></a>
                        <a className='hover:underline' href="/"><p className='text-slate-600'>Electronics</p></a>
                        <a className='hover:underline' href="/"><p className='text-slate-600'>AC and freeze</p></a>
                        <a className='hover:underline' href="/"><p className='text-slate-600'>Laptop and computer</p></a>
                        <a className='hover:underline' href="/"><p className='text-slate-600'>Car</p></a>
                    </div>
                </div>

                <div className='w-1/4 my-12'>
                    <div className='flex space-x-4'>   <img width="40" height="40" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                        <img width="40" height="40" src="https://img.icons8.com/color/40/linkedin.png" alt="linkedin" />
                        <img width="40" height="40" src="https://img.icons8.com/fluency/40/instagram-new.png" alt="instagram-new" />
                    </div>

                </div>
            </div>

        </div>
    )
}
