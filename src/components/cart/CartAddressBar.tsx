import AllShippingAddress from "./ShippingAddress/AllShippingAddress"; 
export default function CartAddressBar() {


    return (
        <>
            <div className="lg:col-span-2 col-span-3 bg-indigo-50 py-6 space-y-8 px-12 rounded-md">
                <div className="rounded-md">
 
                    <AllShippingAddress />
                </div>
            </div>
            <br />
            {/* <div className="lg:col-span-2 col-span-3 bg-indigo-50 py-6 space-y-8 px-12 rounded-md">
                <div className="rounded-md">
                    <ShippingAddressForm />
                </div>
            </div> */}
        </>
    )
}
