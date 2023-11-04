import React from "react";
import AllShippingAddress from "./ShippingAddress/AllShippingAddress";

export default function CartAddressBar() {

    return (
        <>
            <div className="lg:col-span-2 col-span-3 bg-indigo-50 py-6 space-y-8 px-12 rounded-md">
                <AllShippingAddress />
            </div>
            <br /> 
        </>
    )
}
