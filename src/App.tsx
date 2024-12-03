import { useEffect, useState } from "react";
import CorePage from "./pages/CorePage";
import "./assets/style.css";

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
            <div className="flex flex-col text-3xl gap-14 justify-center items-center">
              <div>Currently still working on the Mobile version</div>
              <div>Please open it on Desktop or Tablet</div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
