  
import RootFooter from "../../components/footer/RootFooter";  
import RootHeader from "../../components/header/RootHeader";
 
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
