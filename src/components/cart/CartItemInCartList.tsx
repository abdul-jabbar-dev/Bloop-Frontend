import { TCart } from "../../types/cart/cartItem";

export default function CartItemInCartList({item}:{item:TCart}) {
   return (
      <div className='bg-white'>
          <div className="mb-8 lg:-mx-6 lg:flex lg:items-center">
              <img className="object-cover w-full lg:mx-6 lg:w-1/3 rounded-xl h-72 lg:h-56" src={item.service?.image?.url} alt="" />

              <div className="mt-6 lg:w-2/3 lg:mt-0 lg:mx-6 ">
                  <p className="text-sm text-blue-500 uppercase">{item.service?.service?.title}</p>

                  <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800    md:text-3xl">
                      {item.service?.title}
                  </a>
 
                  <div className="flex items-center mt-6 ">
                      <p className="text-2xl text-gray-700 w-full"> Price: <span>{item.service?.price}</span> </p>
                      <button className=" border border-transparent   outline bg-gray-900 hover:bg-transparent hover:outline-1 hover:outline-gray-900   text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                          <div>
                              <p className="text-base leading-4">Proceed </p>
                          </div>
                      </button>
                  </div>
              </div>

          </div>
      </div>)
  
}
