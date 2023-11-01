
import { useRouter } from 'next/navigation'
export default function BackButton({ link }: { link: string }) {
    const router = useRouter()


    return (
        <>
            <button onClick={() => router.back()} className="flex flex-row items-center text-gray-600  hover:text-gray-500 space-x-1">
                <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm leading-none">Back</p>
            </button>
        </>
    )
}
