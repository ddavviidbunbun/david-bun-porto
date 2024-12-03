import "../assets/style.css";
import AM_1 from "../components/AM_1";
import AM_2 from "../components/AM_2";
import AM_3 from "../components/AM_3";
import { useState } from "react";
import ModalEdu from "../components/ModalEdu";

export default function AboutMe() {
  const [hideEdu, setHideEdu] = useState(false);
  return (
    <>
      <div className="luasAboutMe">
        {hideEdu ? (
          <>
            <ModalEdu fn={setHideEdu} />
          </>
        ) : (
          <>
            <AM_1 />
            <AM_2 fn={setHideEdu} />
            <AM_3 />
          </>
        )}
      </div>
    </>
  );
}
