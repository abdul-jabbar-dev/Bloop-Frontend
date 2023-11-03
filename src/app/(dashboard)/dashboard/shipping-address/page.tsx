"use client"
import React from 'react'
import AllShippingAddress from '../../../../components/cart/ShippingAddress/AllShippingAddress'
import ShippingAddressForm from '../../../../components/cart/ShippingAddress/ShippingAddressForm'

export default function page() {
  return (
      <div>
          <div className="lg:col-span-2 col-span-3 bg-indigo-50 py-6 space-y-8 px-12 rounded-md">
              <AllShippingAddress />
          </div>
          <br />
          <div className="lg:col-span-2 col-span-3 bg-indigo-50 py-6 space-y-8 px-12 rounded-md">
                <div className="rounded-md">
                    <ShippingAddressForm/>
                </div>
            </div>
      </div>


  )
}
