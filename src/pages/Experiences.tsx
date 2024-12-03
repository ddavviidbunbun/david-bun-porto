import "../assets/style.css";
import Card from "../components/Card";
import { useState } from "react";
import Modal from "../components/Modal";
import { ObjData } from "../types";
import { contentsExperiences } from "../data.experiences";

interface obj {
  status: boolean;
  content: ObjData | undefined;
}

export default function Experiences() {
  const [hidden, setHidden] = useState<obj>({
    status: false,
    content: undefined,
  });

  return (
    <>
      <div
        className={
          hidden.status
            ? `onlyGap overflow-hidden grid relative`
            : `onlyGap overflow-y-scroll grid relative`
        }
      >
        {hidden.status ? (
          <></>
        ) : (
          contentsExperiences.map((content, key) => (
            <Card any={content} fn={setHidden} key={key} />
          ))
        )}
        {hidden.status ? (
          <div className="">
            <Modal fn={setHidden} any={hidden.content!} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
