import "../assets/style.css";
import Content, { ObjData } from "../types";

interface obj {
  fn: (
    val:
      | { status: boolean; content: Content }
      | ((prevVar: { status: boolean; content: Content }) => {
          status: boolean;
          content: Content;
        })
  ) => void;
  any: ObjData;
}

export default function Modal({ fn, any }: obj) {
  return (
    <>
      <div className="bg-[#292A2D] modal overflow-scroll off onlyRounded onlyPad onlyGap flex flex-col relative">
        <img
          src={import.meta.env.BASE_URL + "/Arrow-exit.svg"}
          alt="arrow-exit"
          className="absolute right-[2%] sizeExitArrow top-[3%] cursor-pointer"
          onClick={() => fn({ status: false, content: undefined })}
        />
        <div className="grid modalMainFrame onlyGap">
          <div
            className="modalImg cursor-pointer"
            onClick={() => fn({ status: false, content: undefined })}
          >
            <img
              src={import.meta.env.BASE_URL + any.urlImg}
              alt="frame"
              className="modalImg"
            />
          </div>
          <div className="flex flex-col onlyGap justify-center overflow-hidden">
            <div className="modal-40text font-hevBold">
              <span className="">{any.title}</span>
            </div>
            <div className="modal-30text font-hevBold">
              <span>{any.detail.orgName}</span>
            </div>
            <div className="modal-30text">
              <span>{any.detail.locate}</span>
            </div>
          </div>
        </div>
        <div className="flex modal-30text modalLH">
          <span className="block">{any.detail.info}</span>
        </div>
        {any.detail.jobs.map((job: any, key: number) => (
          <div key={key} className="onlyGap grid">
            <div className="flex modalJobLuas justify-between items-center">
              <span className="modal-35text font-hevBold">{job.pos}</span>
              <span className="modal-30text">{job.period}</span>
            </div>
            <div className="flex flex-col">
              <ul className="modalUORLIST modal-30text">
                {job.dos.map((a: any, key: number) => (
                  <li key={key}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
