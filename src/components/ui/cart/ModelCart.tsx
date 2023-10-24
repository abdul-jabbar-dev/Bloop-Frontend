import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import FormDatePicker from '../form/FormDatePicker';
import Form from '../form/Form';

const ModelCart = ({ children }: {
    children: React.ReactElement
}) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div onClick={showDrawer}>{children}</div>
            <Drawer rootStyle={{ width: "100%" }} title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-full mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
                    <div className="flex items-center justify-between rounded-t-3xl p-3 w-full">
                        <div className="text-lg font-bold text-navy-700 dark:text-white">
                            Order
                        </div>
                        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
                            See all
                        </button>
                    </div>
                    <div className="flex h-full w-full items-start justify-between rounded-md border-[1px] border-[transparent] dark:hover:border-white/20 bg-white px-3 py-[20px] transition-all duration-150 hover:border-gray-200 dark:!bg-navy-800 dark:hover:!bg-navy-700">
                        <div className="flex items-center w-full gap-3">
                            <div className="flex flex-grow-0 h-16 w-16 items-center justify-center">
                                <img
                                    className="h-full w-full rounded-xl"
                                    src="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/media/Nft1.0fea34cca5aed6cad72b.png"
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-grow flex-col">
                                <h5 className="text-base font-bold text-navy-700 dark:text-white">
                                    Colorful Heaven
                                </h5>
                                <div className='flex justify-between'>
                                    <div><Form submitHandler={(e) => console.log(e)}><FormDatePicker name='servicingDate' /><Button htmlType='submit'>Add</Button></Form></div>
                                    <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                                        1540<p className="ml-1 text-xs font-thin">BDT</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Drawer>
        </>
    );
};

export default ModelCart;