import React, { useState } from 'react';
import { Drawer } from 'antd';
import CartItem from './CartItem';
import { getFromCart } from '../../../helpers/cart/cart';
import { TCartItem } from '../../../types/cart/cartItem';

const ModelCart = ({ children }: {
    children: React.ReactElement
}) => {
    const [onSelect, setOnSelect] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false);

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
                <div className="relative overflow-x-hidden flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 w-full mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3]">
                    <div className="flex items-center justify-between rounded-t-3xl px-3 w-full">
                        <div className="text-lg font-bold text-navy-700  ">
                            Order
                        </div>
                        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200  ">
                            See all
                        </button>
                    </div>
                    {
                        getFromCart()?.map((item: TCartItem) => <CartItem onSelect={onSelect} setOnSelect={setOnSelect} item={item} />)
                    }

                </div>
            </Drawer>
        </>
    );
};

export default ModelCart;