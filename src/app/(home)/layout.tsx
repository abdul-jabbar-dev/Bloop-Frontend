'use client'  
import RootFooter from "../../components/footer/RootFooter"; 
import dynamic from "next/dynamic";
const RootHeader = dynamic(() => import('../../components/header/RootHeader'), { ssr: false })
 
interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative">
        <RootHeader></RootHeader>
        <br />
        {children}
      </div>

      <RootFooter />
    </>
  );
}

export default RootLayout;
