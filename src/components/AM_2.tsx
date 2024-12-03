import "../assets/style.css";

interface fnSet {
  fn: (x: boolean) => void;
}

export default function AM_2({ fn }: fnSet) {
  return (
    <>
      <div className="grid aboutMe-2 onlyGap">
        <div className="flex justify-center items-center bg-[#292A2D] onlyRounded">
          <div className="aboutMe-2-font font-hevBold">
            <span className="opacity-70">
              I'm a Computer Engineering student with strong
            </span>
            <span className="opacity-100"> problem-solving</span>
            <span className="opacity-70"> skills and a passion for</span>
            <span> IoT</span>
            <span className="opacity-70"> and</span>
            <span> back-end development</span>.
          </div>
        </div>
        <div
          className="flex justify-center items-center bg-[#292A2D] onlyRounded cursor-pointer"
          onClick={() => fn(true)}
        >
          <div className="fontEdu font-hevBold">
            <span>Education</span>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#292A2D] onlyRounded-20">
          <div className="fontGmail">
            <span>david.bunyamin.99@gmail.com</span>
          </div>
        </div>
        <div className="flex justify-center items-center bg-[#292A2D] onlyRounded-20">
          <div className="fontLokasi">
            <span>Indonesia, Tangerang</span>
          </div>
        </div>
      </div>
    </>
  );
}
