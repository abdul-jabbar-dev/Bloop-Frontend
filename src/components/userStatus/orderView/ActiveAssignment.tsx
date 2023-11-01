'use client'
import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Tag } from 'antd';
import dayjs from 'dayjs';
import TOrder from '../../../types/order/order';
import TServicePlaced from '../../../types/servicePlaced/servicePlaced';
import { dateFormat } from '../../../constaint/dateFormat';
import moment from 'moment';
import { CheckCircleOutlined, ClockCircleOutlined, SyncOutlined } from '@ant-design/icons';



const DisableDate = (current: Dayjs): boolean => {
    var startDate = moment().subtract(1, 'days')

    return startDate > current


}


export default function ActiveAssignment({ data }: { data: { data: TOrder[] } }) {
    const servicePlaced: TServicePlaced[] = data.data.map(order => order.servicePlaced)
  

    const dateCellRender = (value: Dayjs) => {
        let listData;
        var startDate = moment().subtract(1, 'days')

        servicePlaced.map(sp => {
            console.log(sp?.order?.status)
            if (dayjs(new Date).format(dateFormat) === value.format(dateFormat) && dayjs(sp.bookingDate, dateFormat).format(dateFormat) === value.format(dateFormat)) {
                if (sp?.order?.status==='finish') {
                    listData = <div className='w-full h-full border rounded-sm  border-[#52c41a] bg-gray-200 my-auto mx-auto flex-col flex justify-center items-center  '>
                    <Tag icon={<SyncOutlined spin />} style={{ width: "100%" }} className='mx-auto h-full rounded-sm' color="success">
                        Complete
                    </Tag>
                    <button className='bg-[#52c41a] hover:bg-[#b7eb8f] hover:border-[#52c41a] -[#52c41a] hover:border text-white outline-none block w-full my-auto rounded-sm' >View</button>
                </div>
                    
                }else{

                    listData = <div className='w-full h-full border rounded-sm  border-[#52c41a] bg-gray-200 my-auto mx-auto flex-col flex justify-center items-center  '>
                    <Tag icon={<SyncOutlined spin />} style={{ width: "100%" }} className='mx-auto h-full rounded-sm' color="success">
                        processing
                    </Tag>
                    <button className='bg-[#52c41a] hover:bg-[#b7eb8f] hover:border-[#52c41a] -[#52c41a] hover:border text-white outline-none block w-full my-auto rounded-sm' >View</button>
                </div>
                }
            } else if (dayjs(sp.bookingDate, dateFormat).format(dateFormat) === value.format(dateFormat)) {


                if (startDate > value) {
                    listData = <div className='w-full h-full border rounded-sm  border-[#1d1f1d8a] bg-gray-200 my-auto mx-auto flex-col flex justify-center items-center  '>
                        <Tag icon={<CheckCircleOutlined />} style={{ width: "100%" }} className='text-[#1d1f1d93] mx-auto h-full rounded-sm'>
                            Finish
                        </Tag>
                        <button className='bg-[#1d1f1d88] hover:bg-[#1d1f1d] hover:border-[#1d1f1d80] -[#1d1f1d] hover:border text-white outline-none block w-full my-auto rounded-sm' >View</button>
                    </div>
                } else {
                    listData = <div className='w-full h-full border rounded-sm  border-[#f50] bg-gray-200 my-auto mx-auto flex-col flex justify-center items-center  '>
                        <Tag icon={<ClockCircleOutlined />} style={{ width: "100%" }} className='text-[#f50] mx-auto h-full rounded-sm'>
                            Upcoming
                        </Tag>
                        <button className='bg-[#f50] hover:bg-[#f50] hover:border-[#f50] -[#f50] hover:border text-white outline-none block w-full my-auto rounded-sm' >View</button>
                    </div>
                }
            }
        })
        return (
            <div className='w-full cursor-auto  h-full'>
                {listData}
            </div>
        );

    };

    return <Calendar disabledDate={DisableDate} cellRender={dateCellRender} />;
};

