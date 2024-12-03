import "../assets/style.css";
import Content, { ObjData } from "../types";

type obj = {
  any: ObjData;
  fn: (
    val:
      | { status: boolean; content: Content }
      | ((prevVar: { status: boolean; content: Content }) => {
          status: boolean;
          content: Content;
        })
  ) => void;
};

export default function Card({ any, fn }: obj) {
  return (
    <>
      <div className="cardGrid onlyGap">
        <div
          className="cardImg cursor-pointer"
          onClick={() => fn({ status: true, content: any })}
        >
          <img src={any.urlImg} alt="Frame" className="cardImg" />
        </div>
        <div className="grid cardGap-1 content-center">
          <span className="sizeTitle block overflow-hidden">{any.title}</span>
          <div className="grid cardGap-2 overflow-hiddens">
            <span className="sizeDatenDesc opacity-80">{any.date}</span>
            <div className="sizeDatenDesc lineHDD overflow-hidden">
              <span className="overscroll-hidden">{any.shortDesc}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
