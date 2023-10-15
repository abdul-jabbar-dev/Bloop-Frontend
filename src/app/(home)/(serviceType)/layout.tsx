import ServiceList from "../../../components/service/ServiceList";

 

export default function layout(page: any) {
    return (
        <div className=' w-[80%] lg:w-[60%] py-32 mx-auto '>

            <div className='flex flex-col sm:flex-row'>
                <div className='lg:w-1/4 sm:w-1/3 w-full '>
                    <ServiceList />
                </div>
                <div className='lg:w-3/4 sm:w-2/3 w-full'>
                    {page.children}
                </div>
            </div>
        </div>
    )
}
