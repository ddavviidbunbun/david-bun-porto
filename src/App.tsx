import { useEffect, useState } from "react";
import CorePage from "./pages/CorePage";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  useEffect(() => {
    document.title = "Initial App";
    const size = () => {
      setIsMobile(window.innerWidth);
    };

    window.addEventListener("resize", size);
    return () => window.removeEventListener("resize", size);
  }, []);

  return (
    <>
      <div className="bg-black w-[100vw] h-[100vh] text-white flex justify-center items-center font-hevRegular overflow-x-hidden">
        {isMobile >= 768 ? (
          <CorePage />
        ) : (
          <>
            <div>Mobile</div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
