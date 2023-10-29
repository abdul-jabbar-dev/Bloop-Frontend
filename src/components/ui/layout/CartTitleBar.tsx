'use client'
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


export default function CartTitleBar({ Title }: { Title: string }) {

    const router = usePathname()
    const listPath: string[] = router.split("/");
    let listItem: { title: string | JSX.Element; href: string }[] = listPath.map((element, i) => ({
        title: element,
        href: listPath.slice(0, i + 1).join('/'),
    }));
    listItem = listItem.map(emp => emp.title == '' ? ({ title: <HomeOutlined />, href: '/' }) : emp)


    return (
        <div className="flex justify-start flex-col mb-3 items-start space-y-2">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 ">{Title}</p>
            <Breadcrumb
                className='text-base leading-normal sm:leading-4 text-gray-700'
                separator="/"
                items={listItem.map(itm => ({ title: (itm.href ? <Link href={(itm.href)}>{itm.title}</Link> : itm.title) }))}
            /> 
        </div>
    )
}
